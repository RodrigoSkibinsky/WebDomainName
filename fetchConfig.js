import fetch from 'node-fetch';

const GITHUB_URL = 'https://raw.githubusercontent.com/tu-usuario/config/main/config.json';

export async function getConfig() {
  const res = await fetch(GITHUB_URL);
  if (!res.ok) {
    throw new Error(`Failed to fetch config: ${res.statusText}`);
  }
  const config = await res.json();
  return config;
}
