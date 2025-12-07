import { useEffect, useState } from "react";

export function useFetchGames(gamesLibrary, delay = 750) {
  const [gamesData, setGamesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timer = setTimeout(() => {
      try {
        setGamesData(gamesLibrary);
        setLoading(false);
      } catch (err) {
        setError("Error loading data", err);
        setLoading(false);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [gamesLibrary, delay]);

  return { gamesData, loading, error };
}