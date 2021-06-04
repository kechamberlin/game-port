const API_URL = 'https://api.rawg.io/api/';
const API_KEY = process.env.REACT_APP_API_KEY;

const SEARCH_BASE_URL = `${API_URL}games?key=${API_KEY}&search=`;
const GAMES_BASE_URL = `${API_URL}games?key=${API_KEY}`;

export { API_URL, API_KEY, SEARCH_BASE_URL, GAMES_BASE_URL };
