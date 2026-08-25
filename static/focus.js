// 列聚焦模块（独立、易改）。
// 作用：点击某列头的聚焦按钮，让该列独占整个看板宽度、其他列隐藏，
// 并把该列卡片从单栏纵向改为多栏平铺，降低纵向堆积。
// 设计约束：
//   - 整体视图（未聚焦）不受影响，所有样式挂在 .board.is-focused 前缀下。
//   - 不改依赖连线算法：其他列卡片被 display:none 后，跨列的连线因两端卡片
//     不再可见而自动不画（见 dependency-lines.js 的 filteredEdges）。
//   - 与详情抽屉(drawer)正交：点卡片看详情逻辑不变；Esc 先关抽屉再退聚焦。

import { t } from './i18n.js?v=20260508-02';
import { setDependencyView, getDependencyView } from './dependency-lines.js?v=20260508-02';

const FOCUS_LAYOUT_KEY = 'kanban.focus.layout'; // 'tiled' | 'single'

let focusedStatus = null;
let savedDependencyView = null; // 进入聚焦前的连线模式，退出时还原

function boardEl() {
  return document.getElementById('board');
}

function layout() {
  return localStorage.getItem(FOCUS_LAYOUT_KEY) === 'single' ? 'single' : 'tiled';
}

function applyLayout(board) {
  board.dataset.focusLayout = layout();
}

// 聚焦后布局变了，通知连线层重算（复用它已有的 resize 监听走的同一条重绘路径）。
function redrawDependencies() {
  window.dispatchEvent(new Event('resize'));
}

function toolbarEl() {
  return document.getElementById('focusToolbar');
}

export function exitFocus() {
  const board = boardEl();
  if (!board) return;
  focusedStatus = null;
  board.classList.remove('is-focused');
  board.querySelectorAll('.board-column.focused').forEach(c => c.classList.remove('focused'));
  toolbarEl()?.classList.remove('is-visible');
  // 还原进入聚焦前的连线模式。
  if (savedDependencyView !== null) {
    setDependencyView(savedDependencyView);
    savedDependencyView = null;
  }
  redrawDependencies();
}

function enterFocus(status) {
  const board = boardEl();
  if (!board) return;
  const firstEnter = focusedStatus === null; // 区分首次进入 vs 重画后恢复
  focusedStatus = status;
  board.classList.add('is-focused');
  applyLayout(board);
  board.querySelectorAll('.board-column').forEach(col => {
    col.classList.toggle('focused', col.dataset.status === status);
  });
  toolbarEl()?.classList.add('is-visible');
  // 聚焦时把连线切到 'focus' 模式：平时不画线，只在 hover/选中单卡时高亮它那条链，
  // 避免平铺多栏时连线打架。仅首次进入时保存用户原来的模式，退出时还原。
  if (firstEnter) savedDependencyView = getDependencyView();
  setDependencyView('focus');
  redrawDependencies();
}

function toggleFocus(status) {
  if (focusedStatus === status) exitFocus();
  else enterFocus(status);
}

function toggleLayout() {
  const next = layout() === 'tiled' ? 'single' : 'tiled';
  localStorage.setItem(FOCUS_LAYOUT_KEY, next);
  const board = boardEl();
  if (board) {
    applyLayout(board);
    redrawDependencies();
  }
}

// renderBoard 每次重画后调用：给每个列头注入聚焦按钮，并恢复上次的聚焦态。
export function setupColumnFocus(board) {
  board.querySelectorAll('.board-column').forEach(col => {
    const header = col.querySelector('header');
    if (!header || header.querySelector('.column-focus-btn')) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'icon-button column-focus-btn';
    btn.title = t('focusColumn');
    btn.setAttribute('aria-label', t('focusColumn'));
    btn.textContent = '⛶';
    btn.addEventListener('click', ev => {
      ev.stopPropagation();
      toggleFocus(col.dataset.status);
    });
    // 把聚焦钮和「＋」钮包进一个按钮组，让它们挨在一起（列头是 space-between，
    // 不包的话两个钮会被撑开）。
    const addBtn = header.querySelector('.mini-add');
    let group = header.querySelector('.column-actions');
    if (!group) {
      group = document.createElement('div');
      group.className = 'column-actions';
      if (addBtn) header.insertBefore(group, addBtn);
      else header.appendChild(group);
      if (addBtn) group.appendChild(addBtn); // ＋钮移入组内
    }
    group.insertBefore(btn, group.firstChild); // 聚焦钮排在 ＋ 前
  });

  // 重画后 focusedStatus 若还在，恢复聚焦态。
  if (focusedStatus) {
    const focusedCol = board.querySelector(`.board-column[data-status="${focusedStatus}"]`);
    if (focusedCol) enterFocus(focusedStatus);
    else focusedStatus = null; // 该列这次不存在了，放弃聚焦
  }
}

// 聚焦工具条：只在 .board.is-focused 时通过 CSS 显示，挂在看板顶部。
// 用一个常驻容器，避免每次重画重建；文案在这里生成一次。
export function ensureFocusToolbar() {
  const board = boardEl();
  if (!board || document.getElementById('focusToolbar')) return;
  const bar = document.createElement('div');
  bar.id = 'focusToolbar';
  bar.className = 'focus-toolbar';
  // 内容全部来自 t() 本地化常量（非用户输入），无 XSS 风险。
  bar.innerHTML = `
    <button type="button" class="button ghost focus-layout-btn">${t('focusLayoutToggle')}</button>
    <button type="button" class="button ghost focus-exit-btn">${t('focusExit')}</button>
  `;
  board.parentElement.insertBefore(bar, board);
}

// 一次性绑定：布局切换按钮（事件委托）+ Esc 退出。
let wired = false;
export function setupFocusControls() {
  if (wired) return;
  wired = true;
  document.addEventListener('click', ev => {
    if (ev.target.closest?.('.focus-layout-btn')) {
      ev.stopPropagation();
      toggleLayout();
    }
    if (ev.target.closest?.('.focus-exit-btn')) {
      ev.stopPropagation();
      exitFocus();
    }
  });
  document.addEventListener('keydown', ev => {
    if (ev.key !== 'Escape') return;
    // 抽屉打开时让抽屉先处理；抽屉关闭且处于聚焦态才退聚焦。
    const drawer = document.getElementById('drawer');
    const drawerOpen = drawer && drawer.classList.contains('open');
    if (!drawerOpen && focusedStatus) exitFocus();
  });
}
