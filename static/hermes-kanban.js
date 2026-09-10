/* Requested interaction overlay. Original Hermes modules remain unchanged. */

(() => {
  const board = document.getElementById('board');
  if (!board) return;

  const SCROLLBAR_HIDE_DELAY = 620;
  const scrollbarTimers = new Map();
  let setupRaf = 0;
  let redrawRaf = 0;
  let clipRaf = 0;

  function showScrollbar(target, className = 'hermes-is-scrolling') {
    target.classList.add(className);
    const previous = scrollbarTimers.get(target);
    if (previous) window.clearTimeout(previous);
    scrollbarTimers.set(target, window.setTimeout(() => {
      target.classList.remove(className);
      scrollbarTimers.delete(target);
    }, SCROLLBAR_HIDE_DELAY));
  }

  function wheelPixels(event) {
    if (event.deltaMode === WheelEvent.DOM_DELTA_LINE) return event.deltaY * 18;
    if (event.deltaMode === WheelEvent.DOM_DELTA_PAGE) return event.deltaY * window.innerHeight;
    return event.deltaY;
  }

  function cardsIn(column) {
    return column?.querySelector(':scope > .cards') || null;
  }

  function columnHasCards(column) {
    return Boolean(column?.querySelector('.task-card'));
  }

  function scheduleDependencyRedraw() {
    if (redrawRaf) return;
    redrawRaf = window.requestAnimationFrame(() => {
      redrawRaf = 0;
      window.dispatchEvent(new Event('resize'));
    });
  }

  function endpointIsVisible(card, offset) {
    const viewport = card?.closest('.cards');
    if (!viewport) return false;
    const viewportRect = viewport.getBoundingClientRect();
    const cardRect = card.getBoundingClientRect();
    const endpointY = cardRect.top + cardRect.height / 2 + offset;
    return cardRect.bottom > viewportRect.top + 1
      && cardRect.top < viewportRect.bottom - 1
      && endpointY >= viewportRect.top + 1
      && endpointY <= viewportRect.bottom - 1;
  }

  function clipDependencyLines() {
    clipRaf = 0;
    const overlay = board.querySelector(':scope > svg.dependency-overlay');
    if (!overlay) return;

    const cards = new Map();
    board.querySelectorAll('.task-card[data-task-id]').forEach(card => {
      cards.set(card.dataset.taskId, card);
    });

    overlay.querySelectorAll('.dependency-edge[data-parent-id][data-child-id]').forEach(path => {
      const parent = cards.get(path.dataset.parentId);
      const child = cards.get(path.dataset.childId);
      const sourceOffset = Number(path.dataset.sourceOffset || 0);
      const targetOffset = Number(path.dataset.targetOffset || 0);
      const visible = endpointIsVisible(parent, sourceOffset) && endpointIsVisible(child, targetOffset);
      path.style.display = visible ? '' : 'none';
    });

    const preview = overlay.querySelector('.dependency-preview-edge');
    if (preview) {
      const source = board.querySelector('.dependency-port.is-link-source')?.closest('.task-card');
      preview.style.display = source && endpointIsVisible(source, 0) ? '' : 'none';
    }
  }

  function scheduleLineClip() {
    if (clipRaf) return;
    clipRaf = window.requestAnimationFrame(clipDependencyLines);
  }

  function attachCards(cards) {
    if (cards.dataset.hermesScrollListener === 'true') return;
    cards.dataset.hermesScrollListener = 'true';
    cards.addEventListener('scroll', () => {
      showScrollbar(cards);
      scheduleDependencyRedraw();
      scheduleLineClip();
    }, { passive: true });
    cards.addEventListener('pointerdown', () => showScrollbar(cards), { passive: true });
  }

  function setupColumns() {
    setupRaf = 0;
    if (board.scrollTop !== 0) board.scrollTop = 0;
    board.querySelectorAll('.board-column').forEach(column => {
      const cards = cardsIn(column);
      if (!cards) return;
      const hasCards = columnHasCards(column);
      column.dataset.hermesHasCards = String(hasCards);
      cards.style.removeProperty('--hermes-cards-max-height');
      if (hasCards) attachCards(cards);
    });
    scheduleLineClip();
  }

  function scheduleColumnSetup() {
    if (setupRaf) return;
    setupRaf = window.requestAnimationFrame(setupColumns);
  }

  function handleColumnWheel(event) {
    if (event.ctrlKey || event.shiftKey) return;
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX) || event.deltaY === 0) return;
    const target = event.target instanceof Element ? event.target : null;
    const column = target?.closest('.board-column');
    if (!column || !board.contains(column) || !columnHasCards(column)) return;

    const cards = cardsIn(column);
    if (!cards) return;
    const delta = wheelPixels(event);
    const maxScroll = Math.max(0, cards.scrollHeight - cards.clientHeight);
    const canScroll = delta < 0 ? cards.scrollTop > 0 : cards.scrollTop < maxScroll - 1;
    if (!canScroll) return;

    const before = cards.scrollTop;
    cards.scrollTop = Math.max(0, Math.min(maxScroll, before + delta));
    if (cards.scrollTop === before) return;

    event.preventDefault();
    showScrollbar(cards);
    scheduleDependencyRedraw();
    scheduleLineClip();
  }

  board.addEventListener('wheel', handleColumnWheel, { capture: true, passive: false });
  board.addEventListener('scroll', () => {
    showScrollbar(board);
    scheduleLineClip();
  }, { passive: true });
  board.addEventListener('pointerdown', () => showScrollbar(board), { passive: true });

  window.addEventListener('scroll', () => {
    showScrollbar(document.documentElement, 'hermes-page-scrolling');
  }, { passive: true });
  window.addEventListener('resize', event => {
    if (event.isTrusted) scheduleColumnSetup();
    scheduleLineClip();
  });

  const observer = new MutationObserver(() => {
    scheduleColumnSetup();
    scheduleLineClip();
  });
  observer.observe(board, { childList: true, subtree: true });

  if ('ResizeObserver' in window) {
    const resizeObserver = new ResizeObserver(scheduleColumnSetup);
    resizeObserver.observe(board);
  }

  scheduleColumnSetup();
})();
