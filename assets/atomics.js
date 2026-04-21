// atomics.js
// MITRE ATT&CK Atomic Tests overview based on atomic/index.json

const state = {
  rows: [],
  dataset: 'index',
  tactics: [],
  techniques: [],
  selectedTactic: 'ALL'
};

function $(sel) { return document.querySelector(sel); }
function $all(sel) { return Array.from(document.querySelectorAll(sel)); }

function setLoadStatus(text) {
  const el = $('#loadStatus');
  if (el) el.textContent = text;
}

async function loadIndexCsv() {
  const payload = getDatasetPayload(state.dataset);
  if (!payload) {
    setLoadStatus('Embedded data missing. Rebuild atomics data files.');
    return;
  }

  setLoadStatus(`Loaded ${state.dataset} dataset.`);
  state.rows = normalizeRows(payload);
  state.tactics = buildTacticList(state.rows);
  state.techniques = buildTechniqueList(state.rows);
  state.selectedTactic = 'ALL';
  renderTacticSelect();
  updateAllUI();
  setLoadStatus(`Loaded ${state.rows.length} rows`);
}

function getDatasetPayload(dataset) {
  if (dataset === 'office-365' && Array.isArray(window.ATOMICS_OFFICE_365_DATA)) {
    return window.ATOMICS_OFFICE_365_DATA;
  }
  if (dataset === 'macos' && Array.isArray(window.ATOMICS_MACOS_DATA)) {
    return window.ATOMICS_MACOS_DATA;
  }
  if (dataset === 'linux' && Array.isArray(window.ATOMICS_LINUX_DATA)) {
    return window.ATOMICS_LINUX_DATA;
  }
  if (dataset === 'iaas' && Array.isArray(window.ATOMICS_IAAS_DATA)) {
    return window.ATOMICS_IAAS_DATA;
  }
  if (dataset === 'google-workspace' && Array.isArray(window.ATOMICS_GOOGLE_WORKSPACE_DATA)) {
    return window.ATOMICS_GOOGLE_WORKSPACE_DATA;
  }
  if (dataset === 'containers' && Array.isArray(window.ATOMICS_CONTAINERS_DATA)) {
    return window.ATOMICS_CONTAINERS_DATA;
  }
  if (dataset === 'windows' && Array.isArray(window.ATOMICS_WINDOWS_DATA)) {
    return window.ATOMICS_WINDOWS_DATA;
  }
  if (dataset === 'index' && Array.isArray(window.ATOMICS_DATA)) {
    return window.ATOMICS_DATA;
  }
  return null;
}

function normalizeRows(payload) {
  if (!Array.isArray(payload)) return [];
  return payload.map((row) => ({
    tactic: row['Tactic'] || row.Tactic || '',
    techniqueId: row['Technique #'] || row.Technique || row['Technique'] || '',
    techniqueName: row['Technique Name'] || row.TechniqueName || '',
    testNumber: Number(row['Test #'] || row.Test || row['Test Number'] || 0),
    testName: row['Test Name'] || row.TestName || '',
    executor: row['Executor Name'] || row.Executor || row.ExecutorName || ''
  }));
}

function buildTechniqueList(rows) {
  const map = new Map();
  rows.forEach((row) => {
    if (!map.has(row.techniqueId)) {
      map.set(row.techniqueId, row.techniqueName);
    }
  });
  return Array.from(map.entries())
    .map(([id, name]) => ({ id, name }))
    .sort((a, b) => a.id.localeCompare(b.id));
}

function buildTacticList(rows) {
  return Array.from(new Set(rows.map((row) => row.tactic)))
    .filter((value) => value)
    .sort();
}

function renderTacticSelect() {
  const select = $('#tacticSelect');
  if (!select) return;
  select.innerHTML = '<option value="ALL">All Tactics</option>' +
    state.tactics.map((tactic) => `<option value="${tactic}">${tactic}</option>`).join('');
  select.value = state.selectedTactic;
}

function getSelectedRows() {
  if (state.selectedTactic === 'ALL') return state.rows;
  return state.rows.filter((row) => row.tactic === state.selectedTactic);
}

function countBy(rows, keyFn) {
  const counts = {};
  rows.forEach((row) => {
    const key = keyFn(row) || 'Unknown';
    counts[key] = (counts[key] || 0) + 1;
  });
  return counts;
}

function getTopKey(counts) {
  const entries = Object.entries(counts).sort((a, b) => b[1] - a[1]);
  return entries[0]?.[0] || null;
}

function updateAllUI() {
  const rows = getSelectedRows();
  updateSnapshot(rows);
  updateProfile(rows);
  updateRadarChart(rows);
  updateTables(rows);
}

function updateSnapshot(rows) {
  const title = $('#techniqueTitle');
  const subtitle = $('#techniqueSubtitle');
  const executorEl = $('#techniqueExecutor');
  const tacticsEl = $('#techniqueTactics');

  if (state.selectedTactic === 'ALL') {
    title.textContent = 'All Tactics';
    subtitle.textContent = `${rows.length} total tests in index.csv`;
  } else {
    title.textContent = state.selectedTactic;
    const techniques = Array.from(new Set(rows.map((row) => row.techniqueId))).length;
    subtitle.textContent = `${techniques} techniques in this tactic`;
  }

  const executorCounts = countBy(rows, (row) => row.executor);
  executorEl.textContent = getTopKey(executorCounts) || '—';

  const techniques = Array.from(new Set(rows.map((row) => row.techniqueId))).sort();
  renderTechniqueChips(tacticsEl, techniques, state.selectedTactic === 'ALL' ? 12 : 18);
}

function renderTechniqueChips(container, techniques, limit) {
  if (!container) return;
  if (!techniques.length) {
    container.textContent = '—';
    return;
  }

  const display = techniques.slice(0, limit);
  const remaining = techniques.length - display.length;
  const chips = display.map((tech) => `<span class="summary-chip">${tech}</span>`).join('');
  const more = remaining > 0 ? `<span class="summary-chip">+${remaining} more</span>` : '';
  container.innerHTML = chips + more;
}

function updateProfile(rows) {
  const tactics = new Set(rows.map((row) => row.tactic));
  const techniques = new Set(rows.map((row) => row.techniqueId));
  const executors = new Set(rows.map((row) => row.executor));

  $('#countTactics').textContent = tactics.size;
  $('#countTechniques').textContent = techniques.size;
  $('#countTests').textContent = rows.length;
  $('#countExecutors').textContent = executors.size;
}

function updateRadarChart(rows) {
  if (!window.Plotly) return;
  const counts = countBy(rows, (row) => row.tactic);
  const tactics = Object.keys(counts).sort();
  const values = tactics.map((t) => counts[t]);
  const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#39ff14';

  Plotly.newPlot('radarPlot', [{
    type: 'scatterpolar',
    r: values,
    theta: tactics,
    fill: 'toself',
    line: { color: accent }
  }], {
    margin: { t: 20, l: 20, r: 20, b: 20 },
    polar: { bgcolor: 'rgba(0,0,0,0)' },
    paper_bgcolor: 'rgba(0,0,0,0)',
    plot_bgcolor: 'rgba(0,0,0,0)',
    font: { color: getComputedStyle(document.documentElement).getPropertyValue('--text') }
  }, { displayModeBar: false });
}

function updateTables(rows) {
  renderTTTable(rows);
  renderTestsTable(rows);
  renderExecutorsTable(rows);
  renderTacticsTable(rows);
}

function renderTTTable(rows) {
  const header = `
    <tr>
      <th>Tactic</th>
      <th>Technique ID</th>
      <th>Technique Name</th>
      <th>Test #</th>
      <th>Test Name</th>
      <th>Executor</th>
    </tr>
  `;
  const body = rows.map((row) => `
    <tr>
      <td>${row.tactic}</td>
      <td>${row.techniqueId}</td>
      <td>${row.techniqueName}</td>
      <td>${row.testNumber}</td>
      <td>${row.testName}</td>
      <td>${row.executor}</td>
    </tr>
  `).join('');
  $('#ttTable').innerHTML = header + (body || '<tr><td colspan="6" class="small">No data available.</td></tr>');
}

function renderTestsTable(rows) {
  const header = `
    <tr>
      <th>Test #</th>
      <th>Test Name</th>
      <th>Technique ID</th>
      <th>Technique Name</th>
      <th>Tactic</th>
      <th>Executor</th>
    </tr>
  `;
  const body = rows.map((row) => `
    <tr>
      <td>${row.testNumber}</td>
      <td>${row.testName}</td>
      <td>${row.techniqueId}</td>
      <td>${row.techniqueName}</td>
      <td>${row.tactic}</td>
      <td>${row.executor}</td>
    </tr>
  `).join('');
  $('#testsTable').innerHTML = header + (body || '<tr><td colspan="6" class="small">No data available.</td></tr>');
}

function renderExecutorsTable(rows) {
  const execCounts = countBy(rows, (row) => row.executor);
  const execTechniques = countBy(rows, (row) => `${row.executor}::${row.techniqueId}`);
  const techniquesByExec = {};
  Object.keys(execTechniques).forEach((key) => {
    const [executor] = key.split('::');
    techniquesByExec[executor] = (techniquesByExec[executor] || 0) + 1;
  });

  const list = Object.keys(execCounts)
    .map((executor) => ({
      executor,
      tests: execCounts[executor],
      techniques: techniquesByExec[executor] || 0
    }))
    .sort((a, b) => b.tests - a.tests);

  const header = `
    <tr>
      <th>Executor</th>
      <th>Tests</th>
      <th>Techniques</th>
    </tr>
  `;
  const body = list.map((row) => `
    <tr>
      <td>${row.executor}</td>
      <td>${row.tests}</td>
      <td>${row.techniques}</td>
    </tr>
  `).join('');
  $('#executorsTable').innerHTML = header + (body || '<tr><td colspan="3" class="small">No data available.</td></tr>');
}

function renderTacticsTable(rows) {
  const tacticCounts = countBy(rows, (row) => row.tactic);
  const tacticTechniques = countBy(rows, (row) => `${row.tactic}::${row.techniqueId}`);
  const techniquesByTactic = {};
  Object.keys(tacticTechniques).forEach((key) => {
    const [tactic] = key.split('::');
    techniquesByTactic[tactic] = (techniquesByTactic[tactic] || 0) + 1;
  });

  const list = Object.keys(tacticCounts)
    .map((tactic) => ({
      tactic,
      tests: tacticCounts[tactic],
      techniques: techniquesByTactic[tactic] || 0
    }))
    .sort((a, b) => b.tests - a.tests);

  const header = `
    <tr>
      <th>Tactic</th>
      <th>Tests</th>
      <th>Techniques</th>
    </tr>
  `;
  const body = list.map((row) => `
    <tr>
      <td>${row.tactic}</td>
      <td>${row.tests}</td>
      <td>${row.techniques}</td>
    </tr>
  `).join('');
  $('#tacticsTable').innerHTML = header + (body || '<tr><td colspan="3" class="small">No data available.</td></tr>');
}

function setActiveTab(tabId, panelId) {
  ['tabTT', 'tabTests', 'tabExecutors', 'tabTactics'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('active', id === tabId);
  });
  ['panelTT', 'panelTests', 'panelExecutors', 'panelTactics'].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.classList.toggle('hidden', id !== panelId);
  });
}

function setupEventListeners() {
  const datasetSelect = $('#datasetSelect');
  if (datasetSelect) {
    datasetSelect.addEventListener('change', (event) => {
      state.dataset = event.target.value;
      loadIndexCsv();
    });
  }

  $('#tacticSelect').addEventListener('change', (event) => {
    state.selectedTactic = event.target.value;
    updateAllUI();
  });

  $('#tabTT').addEventListener('click', () => setActiveTab('tabTT', 'panelTT'));
  $('#tabTests').addEventListener('click', () => setActiveTab('tabTests', 'panelTests'));
  $('#tabExecutors').addEventListener('click', () => setActiveTab('tabExecutors', 'panelExecutors'));
  $('#tabTactics').addEventListener('click', () => setActiveTab('tabTactics', 'panelTactics'));
}

document.addEventListener('DOMContentLoaded', () => {
  setupEventListeners();
  loadIndexCsv();
});
