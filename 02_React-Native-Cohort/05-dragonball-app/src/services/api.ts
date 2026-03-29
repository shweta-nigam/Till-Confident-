const BASE_URL = 'https://dragonball-api.com/api/v1';

export const getCharacters = async () => {
  const res = await fetch(`${BASE_URL}/characters`);
  const data = await res.json();
  return data;
};