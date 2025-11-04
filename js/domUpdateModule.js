import { cToF } from './conversionModule.js';
import { getEmoji, getIconClass } from './weatherModule.js';

export function renderOverview(container, cities, unit) {
  container.innerHTML = '';
  if (cities.length === 0) {
    container.innerHTML = '<li>No cities added yet.</li>';
    return;
  }

  cities.forEach(item => {
    const temp = unit === 'C' ? item.baseC : cToF(item.baseC);
    const emoji = getEmoji(item.condition);
    const li = document.createElement('li');
    li.innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;">
        <div class="icon ${getIconClass(item.condition)}">${emoji}</div>
        <div>
          <div style="font-weight:700">${item.city}</div>
          <div style="font-size:13px;color:#666">${item.condition}</div>
        </div>
      </div>
      <div style="font-weight:700">${Math.round(temp)}°${unit}</div>`;
    container.appendChild(li);
  });
}
