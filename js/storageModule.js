import { STORAGE_KEY, getDefaultCities } from './weatherModule.js';

export function save(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function load() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (raw) {
    try { return JSON.parse(raw); }
    catch { return []; }
  } else {
    const defaults = getDefaultCities();
    save(defaults);
    return defaults;
  }
}
