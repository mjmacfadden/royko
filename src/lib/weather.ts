/**
 * Print-edition weather: Open-Meteo daily forecast (free, no key, CORS-ok).
 * Screen keeps weatherwidget.io; print uses this B&W strip so ink always works.
 */
import { lookupZipGeo, type ZipGeo } from './settings';

export interface DayForecast {
  date: string;
  /** Short day label: Today, Thu, Fri… */
  label: string;
  highF: number;
  lowF: number;
  condition: string;
  weatherCode: number;
}

/** Known-good Northbrook coords (ZIP 60062). */
export const NORTHBROOK_GEO: ZipGeo = {
  lat: 42.13,
  lon: -87.83,
  city: 'Northbrook',
  stateAbbr: 'IL',
};

/** WMO weather interpretation codes → plain English (print-friendly). */
export function wmoCondition(code: number): string {
  if (code === 0) return 'Clear';
  if (code === 1) return 'Mostly clear';
  if (code === 2) return 'Partly cloudy';
  if (code === 3) return 'Overcast';
  if (code === 45 || code === 48) return 'Fog';
  if (code === 51 || code === 53 || code === 55) return 'Drizzle';
  if (code === 56 || code === 57) return 'Freezing drizzle';
  if (code === 61 || code === 63 || code === 65) return 'Rain';
  if (code === 66 || code === 67) return 'Freezing rain';
  if (code === 71 || code === 73 || code === 75) return 'Snow';
  if (code === 77) return 'Snow grains';
  if (code === 80 || code === 81 || code === 82) return 'Showers';
  if (code === 85 || code === 86) return 'Snow showers';
  if (code === 95) return 'Thunderstorm';
  if (code === 96 || code === 99) return 'T-storm / hail';
  return 'Varied';
}

function chicagoDayLabel(isoDate: string, index: number): string {
  if (index === 0) return 'Today';
  if (index === 1) return 'Tomorrow';
  const d = new Date(`${isoDate}T12:00:00`);
  return new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago',
    weekday: 'short',
  }).format(d);
}

export async function geoForZip(zip: string): Promise<ZipGeo> {
  if (zip === '60062') return NORTHBROOK_GEO;
  const geo = await lookupZipGeo(zip);
  return geo || NORTHBROOK_GEO;
}

/**
 * Fetch 5-day daily hi/lo + condition from Open-Meteo (America/Chicago).
 * Returns null on network/parse failure.
 */
export async function fetchOpenMeteoForecast(
  lat: number,
  lon: number,
  forecastDays = 5,
): Promise<DayForecast[] | null> {
  const url = new URL('https://api.open-meteo.com/v1/forecast');
  url.searchParams.set('latitude', String(lat));
  url.searchParams.set('longitude', String(lon));
  url.searchParams.set('daily', 'weather_code,temperature_2m_max,temperature_2m_min');
  url.searchParams.set('temperature_unit', 'fahrenheit');
  url.searchParams.set('timezone', 'America/Chicago');
  url.searchParams.set('forecast_days', String(forecastDays));

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 12000);
  try {
    const res = await fetch(url.toString(), { signal: controller.signal });
    if (!res.ok) return null;
    const data = (await res.json()) as {
      daily?: {
        time?: string[];
        weather_code?: number[];
        temperature_2m_max?: number[];
        temperature_2m_min?: number[];
      };
    };
    const days = data.daily?.time;
    if (!days?.length) return null;
    const codes = data.daily?.weather_code || [];
    const highs = data.daily?.temperature_2m_max || [];
    const lows = data.daily?.temperature_2m_min || [];
    return days.map((date, i) => {
      const code = Number(codes[i] ?? 0);
      return {
        date,
        label: chicagoDayLabel(date, i),
        highF: Math.round(Number(highs[i] ?? 0)),
        lowF: Math.round(Number(lows[i] ?? 0)),
        condition: wmoCondition(code),
        weatherCode: code,
      };
    });
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

/** Build print strip HTML (black ink only — no icons/color). */
export function renderPrintWeatherStripHtml(
  days: DayForecast[],
  escapeHtml: (t: string) => string,
): string {
  return days
    .map(
      (d) => `<div class="weather-print-day">
  <span class="wpd-day">${escapeHtml(d.label)}</span>
  <span class="wpd-cond">${escapeHtml(d.condition)}</span>
  <span class="wpd-temps">${d.highF}° / ${d.lowF}°</span>
</div>`,
    )
    .join('');
}
