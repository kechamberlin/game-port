import { useState, useEffect } from 'react';
import API from '../API';
import { isPersistedState } from '../helpers';

export function useGameFetch(gameId) {
  const [state, setState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGame = async () => {
      try {
        setLoading(true);
        setError(false);
        const game = await API.fetchGame(gameId);
        const series = await API.fetchSeries(gameId);
        setState({ ...game, series: series.results });
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedState(gameId);

    if (sessionState) {
      setState(sessionState);
      setLoading(false);
      return;
    }

    fetchGame();
  }, [gameId]);

  // Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(gameId, JSON.stringify(state)); // can change to localStorage if needed
  }, [gameId, state]);

  return { state, loading, error };
}
