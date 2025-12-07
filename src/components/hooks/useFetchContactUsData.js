import { useEffect, useState } from "react";

export function useFetchContactUsData(contactUsData, delay = 250) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let timer = setTimeout(() => {
      try {
        setData(contactUsData);
        setLoading(false);
      } catch (err) {
        setError("Error loading data", err);
        setLoading(false);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [contactUsData, delay]);

  return { data, loading, error };
}