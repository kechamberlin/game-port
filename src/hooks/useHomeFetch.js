import { useEffect, useState } from 'react';
import API from '../API';
import { isPersistedState } from '../helpers';

const initialState = {
  count: 0,
  next: '',
  previous: '',
  results: [],
};

export function useHomeFetch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const fetchGames = async (page, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);
      const games = await API.fetchGames(searchTerm, page);

      setState((prevState) => ({
        ...games,
        results: state.next
          ? [...prevState.results, ...games.results]
          : [...games.results],
      }));
    } catch (error) {
      setError(true);
      console.log(error);
    }
    setLoading(false);
  };

  // Initial Render and Search
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState('homeState');

      if (sessionState) {
        setState(sessionState);
        return;
      }
    }

    setState(initialState);
    fetchGames(1, searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  // LOAD MORE
  useEffect(() => {
    if (!isLoadingMore) return;
    fetchGames(state.next, searchTerm); // or try state.page + 1
    setIsLoadingMore(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoadingMore, searchTerm, state.next]);

  useEffect(() => {
    if (!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state)); // can change to localStorage if needed
  }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
}
