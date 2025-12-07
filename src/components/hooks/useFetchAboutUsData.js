import { useEffect, useState } from "react";

export function useFetchAboutUsData(aboutUsData, delay = 500) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timer = setTimeout(() => {
      try {
        setData(aboutUsData);
        setLoading(false);
      } catch (err) {
        setError("Error loading data", err);
        setLoading(false);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [aboutUsData, delay]);

  return { data, loading, error };
}