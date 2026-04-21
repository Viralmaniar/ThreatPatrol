// csvWorker.js
// Web Worker for parsing CSV files for atomics.html

function parseLine(line) {
  const result = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i += 1) {
    const char = line[i];
    if (char === '"') {
      if (inQuotes && line[i + 1] === '"') {
        current += '"';
        i += 1;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);
  return result.map((value) => value.trim());
}

function parseCSV(text, dataset) {
  const lines = text.split(/\r?\n/);
  if (!lines.length) return [];

  const header = parseLine(lines[0]);
  const idx = {
    tactic: header.indexOf('Tactic'),
    techniqueId: header.indexOf('Technique #'),
    techniqueName: header.indexOf('Technique Name'),
    testNumber: header.indexOf('Test #'),
    testName: header.indexOf('Test Name'),
    testGuid: header.indexOf('Test GUID'),
    executor: header.indexOf('Executor Name')
  };

  const rows = [];
  for (let i = 1; i < lines.length; i += 1) {
    if (!lines[i].trim()) continue;
    const cols = parseLine(lines[i]);
    if (cols.length < 7) continue;
    const row = {
      dataset,
      tactic: cols[idx.tactic] || cols[0],
      techniqueId: cols[idx.techniqueId] || cols[1],
      techniqueName: cols[idx.techniqueName] || cols[2],
      testNumber: Number(cols[idx.testNumber] || cols[3]),
      testName: cols[idx.testName] || cols[4],
      testGuid: cols[idx.testGuid] || cols[5],
      executor: cols[idx.executor] || cols[6]
    };
    rows.push(row);
    if (rows.length % 500 === 0) {
      postMessage({ type: 'progress', rows: rows.length });
    }
  }
  return rows;
}

self.onmessage = async function (e) {
  const { url, dataset } = e.data;
  try {
    const resp = await fetch(url);
    const text = await resp.text();
    const rows = parseCSV(text, dataset);
    postMessage({ type: 'done', rows });
  } catch (err) {
    postMessage({ type: 'error', error: err.message });
  }
};
