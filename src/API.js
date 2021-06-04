import { API_URL, API_KEY, GAMES_BASE_URL, SEARCH_BASE_URL } from './config';

const apiSettings = {
  fetchGames: async (searchTerm, page) => {
    const endpoint = searchTerm
      ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
      : `${GAMES_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
  },
  fetchGame: async (gameId) => {
    const endpoint = `${API_URL}games/${gameId}?key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
  fetchSeries: async (gameId) => {
    const endpoint = `${API_URL}games/${gameId}/game-series?key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
  },
};

export default apiSettings;
