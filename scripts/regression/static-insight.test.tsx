import assert from 'node:assert/strict';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import InsightPanel from '../../components/InsightPanel';
import { generateChart } from '../../lib/ziwei/algorithm';

// 静态站不能提供解读服务，不应展示可提交的追问入口或永久加载状态。
process.env.NEXT_PUBLIC_STATIC_EXPORT = 'true';
const chart = generateChart({ year: 2000, month: 1, day: 1, hour: 4, gender: 'male' });
for (const selectedPalace of [null, chart.palaces[0], chart.palaces[1]]) {
  const html = renderToStaticMarkup(createElement(InsightPanel, { chart, selectedPalace }));
  assert.match(html, /AI 解读尚未接入/);
  assert.doesNotMatch(html, /<input|<button|生成中|稍后重试/);
}
console.log('静态站解读面板：提示服务缺失，不显示追问或加载状态，通过');
