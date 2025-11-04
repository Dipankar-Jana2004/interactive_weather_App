export const STORAGE_KEY = 'intern_weather_cities_v1';
export let cities = [];

export function getDefaultCities() {
  return [
    { city: 'New York', baseC: 22, condition: 'Partly cloudy' },
    { city: 'London', baseC: 14, condition: 'Cloudy' },
    { city: 'Tokyo', baseC: 20, condition: 'Rainy' },
    { city: 'Sydney', baseC: 27, condition: 'Sunny' }
  ];
}

export function getIconClass(cond) {
  const c = cond.toLowerCase();
  if (c.includes('sun') || c.includes('clear')) return 'sun';
  if (c.includes('cloud') || c.includes('partly')) return 'cloud';
  if (c.includes('rain') || c.includes('storm')) return 'rain';
  return 'cloud';
}

export function getEmoji(cond) {
  const c = cond.toLowerCase();
  if (c.includes('sun') || c.includes('clear')) return '☀️';
  if (c.includes('partly')) return '🌤️';
  if (c.includes('cloud')) return '☁️';
  if (c.includes('rain')) return '🌧️';
  if (c.includes('storm')) return '⛈️';
  if (c.includes('snow')) return '❄️';
  if (c.includes('wind')) return '🌬️';
  return '🌈';
}
