import { load, save } from './storageModule.js';
import { renderOverview } from './domUpdateModule.js';
import { showAlert } from './eventHandlingModule.js';
import { fToC } from './conversionModule.js';

let cities = load();

const alertBox = document.getElementById('alertBox');
const unitToggle = document.getElementById('unitToggle');
const overviewList = document.getElementById('overviewList');
const leftCity = document.getElementById('leftCity');
const leftTemp = document.getElementById('leftTemp');
const leftCondition = document.getElementById('leftCondition');
const addBtn = document.getElementById('addBtn');
const clearAllBtn = document.getElementById('clearAll');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const searchUnit = document.getElementById('searchUnit');
const clearSearchBtn = document.getElementById('clearSearch');
const searchResults = document.getElementById('searchResults');

function getDisplayUnit() {
  return unitToggle.checked ? 'F' : 'C';
}

// --- Overview Rendering ---
renderOverview(overviewList, cities, getDisplayUnit());

// --- Add City ---
addBtn.addEventListener('click', () => {
  const city = leftCity.value.trim();
  if (!city) { showAlert('Please enter a valid city.', alertBox); return; }
  const cond = leftCondition.value || 'Clear';
  const tempVal = parseFloat(leftTemp.value || 0);
  const baseC = getDisplayUnit() === 'C' ? tempVal : fToC(tempVal);
  cities.push({ city, baseC, condition: cond });
  save(cities);
  renderOverview(overviewList, cities, getDisplayUnit());
  leftCity.value = ''; leftTemp.value = ''; leftCondition.selectedIndex = 0;
});

// --- Clear All ---
clearAllBtn.addEventListener('click', () => {
  if (confirm('Clear all cities?')) {
    cities = [];
    save(cities);
    renderOverview(overviewList, cities, getDisplayUnit());
  }
});

// --- Unit Toggle ---
unitToggle.addEventListener('change', () => renderOverview(overviewList, cities, getDisplayUnit()));

// --- Search City ---
function doSearch() {
  const q = searchInput.value.trim().toLowerCase();
  const matched = cities.filter(c => c.city.toLowerCase().includes(q));
  renderOverview(searchResults, matched, searchUnit.checked ? 'F' : 'C');
}
searchBtn.addEventListener('click', doSearch);
searchInput.addEventListener('input', doSearch);
searchUnit.addEventListener('change', doSearch);
clearSearchBtn.addEventListener('click', () => { searchInput.value=''; searchResults.innerHTML=''; });
