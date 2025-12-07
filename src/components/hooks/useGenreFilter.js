import { useState, useEffect } from "react";

export function useGenreFilter(gamesLibrary, setGamesArray) {
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    if (!selectedGenre) {
      setGamesArray(gamesLibrary);
      return;
    }

    setGamesArray(
      gamesLibrary.filter(game =>
        game.genres.includes(selectedGenre.toLowerCase()) ||
        game.genres.includes(selectedGenre)
      )
    );
  }, [selectedGenre, gamesLibrary, setGamesArray]);

  return { selectedGenre, setSelectedGenre };
}