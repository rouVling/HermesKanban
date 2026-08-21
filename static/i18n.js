export const labels = {
  ko: {
    subtitle: '읽기 쉬운 작업 운영 보드', newBoard: '보드 추가', refresh: '새로고침', themeDark: '다크로 전환', themeLight: '라이트로 전환', quickTitle: '작업 제목을 입력하고 Enter',
    taskCreate: 'Task 추가', taskCreateHint: '필요할 때만 제목, 설명, 담당 프로필, 상태를 입력해 새 task를 생성합니다.', taskTitlePlaceholder: '작업 제목', taskBodyPlaceholder: '작업 설명/지시사항(선택)',
    assignee: '담당 프로필', create: '추가', created: '생성일', createdToast: '생성됨', search: '작업 제목/내용/ID 검색', allAssignees: '전체 담당자', unassigned: '미지정', profileMissing: '담당 프로필 미지정', profileMissingShort: '프로필 필요', agentProfile: '프로필', manualAssignee: '수동', showArchived: '보관함 표시',
    bulkCreate: '일괄 추가', boardName: '보드 이름', description: '설명', cancel: '취소', bulkHint: '한 줄에 작업 하나씩 입력하세요.', loading: '불러오는 중…',
    workflow: 'Workflow', workflowCreate: 'AI Workflow 생성', workflowDesignerHint: '프롬프트와 첨부파일로 작업 DAG를 설계한 뒤 승인 시 실제 Kanban task로 적용합니다.', workflowPrompt: 'Workflow 프롬프트', workflowPromptPlaceholder: '목표, 산출물, 제약, 원하는 단계 수를 설명하세요', workflowPlannerProfile: 'Planner 프로필', workflowAttachments: '첨부파일', workflowPlan: '설계', workflowPlanning: 'AI가 workflow 초안을 설계하는 중…', workflowRevise: '수정', workflowRevisionPlaceholder: '변경할 단계/담당 프로필/의존성을 설명하세요', workflowApply: '적용', workflowDraftStatus: 'Draft 상태', workflowDraftEmpty: '프롬프트를 입력하고 설계를 누르면 초안이 표시됩니다.', workflowNotApplyable: '아직 적용할 수 없는 초안입니다. 질문을 해결한 뒤 수정 요청을 보내세요.', workflowInstance: 'Instance ID', workflowStep: '현재 단계', workflowSteps: '단계',
    updateAvailable: '새 업데이트 사용 가능', updateTitle: 'KanbanWebUI 업데이트', updateApply: '업데이트 후 재시작', updateLater: '나중에', updateChecking: '업데이트 상태 확인 중…', updateRestarting: '업데이트 적용 중… 서버가 재시작되면 자동으로 새로고침합니다.', updateBlocked: '자동 업데이트 불가', updateNoCommits: '커밋 목록 없음',
    triage: '분류', todo: '대기', ready: '준비', running: '실행중', blocked: '막힘', done: '완료', archived: '보관',
    title: '제목', body: '본문', noDescription: '설명 없음', priority: '우선순위', status: '상태', workspace: '워크스페이스', createdBy: '생성자',
    comments: '댓글', events: '이벤트', runs: '런', monitor: 'Live Run Monitor', context: '컨텍스트', log: '로그', workerLog: 'Worker 로그',
    dependencies: '의존성', parents: '부모', children: '자식', parent: '부모', child: '자식', chooseTask: '작업 선택', none: '없음', remove: '삭제',
    parentPortHint: '왼쪽 부모 포트: 다른 task의 오른쪽 자식 포트로 드래그해 부모로 연결', childPortHint: '오른쪽 자식 포트: 다른 task의 왼쪽 부모 포트로 드래그해 자식으로 연결', linkCreatedToast: '부모/자식 연결됨', linkInvalidToast: '왼쪽 부모 포트와 오른쪽 자식 포트만 연결할 수 있습니다.', linkSameTaskToast: '같은 task끼리는 연결할 수 없습니다.',
    dependencyViewFocus: '관계선: 선택 중심', dependencyViewAll: '관계선: 전체', dependencyViewBlocked: '관계선: 막힘', dependencyViewOff: '관계선: 숨김',
    dependencyMap: '관계 지도', currentTask: '현재 작업', noDependencies: '연결된 부모/자식 없음',
    notifyHomeChannels: '홈 채널 알림', noHomeChannels: '설정된 홈 채널 없음', noWorkerLog: 'worker 로그 없음',
    complete: '완료', block: '막기', unblock: '해제', archive: '보관', save: '저장', close: '닫기', addComment: '댓글 추가',
    operations: 'Operations', opsOverview: 'Operations 개요', opsRunning: '실행 중', opsHeartbeatOverdue: 'Heartbeat 지연', opsRetryQueue: 'Retry queue', opsBlockedAfterRetries: '재시도 후 막힘', opsRecentFailures: '최근 실패', opsNoRunning: '실행 중인 작업 없음', opsNoRetry: '재시도 후보 없음', opsNoBlockedAfterRetries: '재시도 후 막힌 작업 없음', opsNoFailures: '최근 실패 이벤트 없음', opsEligibleNow: '지금 가능', opsEstimatedWait: '예상 대기', opsAttempt: '시도', opsLastError: '마지막 오류', opsOpenTask: '열기', opsEstimatedBackoffAdvisory: '표시된 backoff는 현재 실패 정보로 계산한 참고용 추정치이며 dispatcher가 아직 강제하지 않습니다.', empty: '없음'
  },
  en: {
    subtitle: 'Readable operations board', newBoard: 'New board', refresh: 'Refresh', themeDark: 'Switch dark', themeLight: 'Switch light', quickTitle: 'Type a task title and press Enter',
    taskCreate: 'Create task', taskCreateHint: 'Open this dialog only when you need to set title, details, agent profile, and status for a new task.', taskTitlePlaceholder: 'Task title', taskBodyPlaceholder: 'Task details/instructions (optional)',
    assignee: 'Agent profile', create: 'Create', created: 'Created', createdToast: 'Created', search: 'Search title/body/ID', allAssignees: 'All assignees', unassigned: 'Unassigned', profileMissing: 'Agent profile missing', profileMissingShort: 'Needs profile', agentProfile: 'profile', manualAssignee: 'manual', showArchived: 'Show archived',
    bulkCreate: 'Bulk create', boardName: 'Board name', description: 'Description', cancel: 'Cancel', bulkHint: 'One task per line.', loading: 'Loading…',
    workflow: 'Workflow', workflowCreate: 'Create AI workflow', workflowDesignerHint: 'Design a task DAG from a prompt and attachments, then approve it into real Kanban tasks.', workflowPrompt: 'Workflow prompt', workflowPromptPlaceholder: 'Describe goals, outputs, constraints, and desired step count', workflowPlannerProfile: 'Planner profile', workflowAttachments: 'Attachments', workflowPlan: 'Plan', workflowPlanning: 'AI is designing a workflow draft…', workflowRevise: 'Revise', workflowRevisionPlaceholder: 'Describe step/profile/dependency changes', workflowApply: 'Apply', workflowDraftStatus: 'Draft status', workflowDraftEmpty: 'Enter a prompt and click Plan to preview a draft.', workflowNotApplyable: 'This draft is not applyable yet. Resolve questions and send a revision.', workflowInstance: 'Instance ID', workflowStep: 'Current step', workflowSteps: 'steps',
    updateAvailable: 'Update available', updateTitle: 'KanbanWebUI update', updateApply: 'Update and restart', updateLater: 'Later', updateChecking: 'Checking update status…', updateRestarting: 'Applying update… this page will reload after the server restarts.', updateBlocked: 'Automatic update blocked', updateNoCommits: 'No commit details',
    triage: 'Triage', todo: 'Todo', ready: 'Ready', running: 'Running', blocked: 'Blocked', done: 'Done', archived: 'Archived',
    title: 'Title', body: 'Body', noDescription: 'No description', priority: 'Priority', status: 'Status', workspace: 'Workspace', createdBy: 'Created by',
    comments: 'Comments', events: 'Events', runs: 'Runs', monitor: 'Live Run Monitor', context: 'Context', log: 'Log', workerLog: 'Worker log',
    dependencies: 'Dependencies', parents: 'Parents', children: 'Children', parent: 'Parent', child: 'Child', chooseTask: 'Choose task', none: 'None', remove: 'Remove',
    parentPortHint: 'Left parent port: drag to another task right child port to link as parent', childPortHint: 'Right child port: drag to another task left parent port to link as child', linkCreatedToast: 'Parent/child linked', linkInvalidToast: 'Connect one left parent port with one right child port.', linkSameTaskToast: 'A task cannot link to itself.',
    dependencyViewFocus: 'Lines: Focus', dependencyViewAll: 'Lines: All', dependencyViewBlocked: 'Lines: Blocked', dependencyViewOff: 'Lines: Hidden',
    dependencyMap: 'Dependency map', currentTask: 'Current task', noDependencies: 'No parent/child links',
    notifyHomeChannels: 'Notify home channels', noHomeChannels: 'No home channels configured', noWorkerLog: 'No worker log yet',
    complete: 'Complete', block: 'Block', unblock: 'Unblock', archive: 'Archive', save: 'Save', close: 'Close', addComment: 'Add comment',
    operations: 'Operations', opsOverview: 'Operations overview', opsRunning: 'Running now', opsHeartbeatOverdue: 'Heartbeat overdue', opsRetryQueue: 'Retry queue', opsBlockedAfterRetries: 'Blocked after retries', opsRecentFailures: 'Recent failures', opsNoRunning: 'No running tasks', opsNoRetry: 'No retry candidates', opsNoBlockedAfterRetries: 'No tasks blocked after retries', opsNoFailures: 'No recent failure events', opsEligibleNow: 'Eligible now', opsEstimatedWait: 'Estimated wait', opsAttempt: 'Attempt', opsLastError: 'Last error', opsOpenTask: 'Open task', opsEstimatedBackoffAdvisory: 'Estimated backoff is advisory until dispatcher-level backoff is implemented.', empty: 'None'
  },
  zh: {
    subtitle: '清晰易读的任务运维看板', newBoard: '新建看板', refresh: '刷新', themeDark: '切换深色', themeLight: '切换浅色', quickTitle: '输入任务标题后按回车',
    taskCreate: '新建任务', taskCreateHint: '仅在需要为新任务设置标题、详情、执行者 profile 和状态时打开此对话框。', taskTitlePlaceholder: '任务标题', taskBodyPlaceholder: '任务详情/指示（可选）',
    assignee: '执行者 profile', create: '创建', created: '创建于', createdToast: '已创建', search: '搜索标题/内容/ID', allAssignees: '全部执行者', unassigned: '未分配', profileMissing: '未指定执行者 profile', profileMissingShort: '需要 profile', agentProfile: 'profile', manualAssignee: '手动', showArchived: '显示已归档',
    bulkCreate: '批量创建', boardName: '看板名称', description: '描述', cancel: '取消', bulkHint: '每行一个任务。', loading: '加载中…',
    workflow: 'Workflow', workflowCreate: '创建 AI Workflow', workflowDesignerHint: '根据提示词和附件设计任务 DAG，确认后应用为真实的 Kanban 任务。', workflowPrompt: 'Workflow 提示词', workflowPromptPlaceholder: '描述目标、产出、约束以及期望的步骤数', workflowPlannerProfile: 'Planner profile', workflowAttachments: '附件', workflowPlan: '设计', workflowPlanning: 'AI 正在设计 workflow 草稿…', workflowRevise: '修改', workflowRevisionPlaceholder: '描述要修改的步骤/profile/依赖', workflowApply: '应用', workflowDraftStatus: '草稿状态', workflowDraftEmpty: '输入提示词并点击「设计」以预览草稿。', workflowNotApplyable: '该草稿尚不可应用。请先解决遗留问题，再发送修改请求。', workflowInstance: 'Instance ID', workflowStep: '当前步骤', workflowSteps: '步骤',
    updateAvailable: '有可用更新', updateTitle: 'KanbanWebUI 更新', updateApply: '更新并重启', updateLater: '稍后', updateChecking: '正在检查更新状态…', updateRestarting: '正在应用更新… 服务器重启后本页会自动刷新。', updateBlocked: '自动更新被阻止', updateNoCommits: '无提交详情',
    triage: '待分类', todo: '待办', ready: '就绪', running: '运行中', blocked: '受阻', done: '完成', archived: '已归档',
    title: '标题', body: '内容', noDescription: '无描述', priority: '优先级', status: '状态', workspace: '工作区', createdBy: '创建者',
    comments: '评论', events: '事件', runs: '运行记录', monitor: '实时运行监控', context: '上下文', log: '日志', workerLog: 'Worker 日志',
    dependencies: '依赖关系', parents: '父任务', children: '子任务', parent: '父任务', child: '子任务', chooseTask: '选择任务', none: '无', remove: '移除',
    parentPortHint: '左侧父任务端口：拖到其他任务的右侧子任务端口以连接为父任务', childPortHint: '右侧子任务端口：拖到其他任务的左侧父任务端口以连接为子任务', linkCreatedToast: '已建立父/子连接', linkInvalidToast: '只能将一个左侧父任务端口与一个右侧子任务端口相连。', linkSameTaskToast: '任务不能连接到自身。',
    dependencyViewFocus: '关系线：聚焦', dependencyViewAll: '关系线：全部', dependencyViewBlocked: '关系线：受阻', dependencyViewOff: '关系线：隐藏',
    dependencyMap: '关系图', currentTask: '当前任务', noDependencies: '无父/子连接',
    notifyHomeChannels: '通知 home 频道', noHomeChannels: '未配置 home 频道', noWorkerLog: '暂无 worker 日志',
    complete: '完成', block: '标记受阻', unblock: '解除受阻', archive: '归档', save: '保存', close: '关闭', addComment: '添加评论',
    operations: 'Operations', opsOverview: 'Operations 概览', opsRunning: '正在运行', opsHeartbeatOverdue: '心跳超时', opsRetryQueue: '重试队列', opsBlockedAfterRetries: '重试后受阻', opsRecentFailures: '近期失败', opsNoRunning: '无运行中的任务', opsNoRetry: '无重试候选', opsNoBlockedAfterRetries: '无重试后受阻的任务', opsNoFailures: '无近期失败事件', opsEligibleNow: '当前可执行', opsEstimatedWait: '预计等待', opsAttempt: '尝试次数', opsLastError: '最后错误', opsOpenTask: '打开任务', opsEstimatedBackoffAdvisory: '所示 backoff 为根据当前失败信息计算的参考估值，dispatcher 尚未强制执行。', empty: '无'
  }
};

const SUPPORTED_LANGS = ['zh', 'en', 'ko'];
const DEFAULT_LANG = 'en';
// Language toggle cycles zh -> en -> ko -> zh; the button label shows the NEXT language.
const NEXT_LANG = { zh: 'en', en: 'ko', ko: 'zh' };
const LANG_LABEL = { zh: '中', en: 'EN', ko: 'KO' };

function normalizeLang(value) { return SUPPORTED_LANGS.includes(value) ? value : DEFAULT_LANG; }

let currentLang = normalizeLang(localStorage.getItem('kanbanLang'));

export function lang() { return currentLang; }
export function nextLang() { return NEXT_LANG[currentLang]; }
export function setLang(next) { currentLang = normalizeLang(next); localStorage.setItem('kanbanLang', currentLang); applyI18n(); }
export function t(key) { return (labels[currentLang] && labels[currentLang][key]) || labels[DEFAULT_LANG][key] || key; }

export function applyI18n(root = document) {
  root.documentElement?.setAttribute('lang', currentLang);
  root.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n); });
  root.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });
  const toggle = root.getElementById?.('langToggle');
  if (toggle) toggle.textContent = LANG_LABEL[NEXT_LANG[currentLang]];
}
