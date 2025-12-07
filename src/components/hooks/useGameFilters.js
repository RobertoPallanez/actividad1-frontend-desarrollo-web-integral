import { useState, useEffect } from "react";

export function useGameFilters(gamesLibrary, setGamesArray) {
  const [selectedFilter, setSelectedFilter] = useState("All Games");

  useEffect(() => {
    if (selectedFilter === "All Games" || !selectedFilter) {
      setGamesArray(gamesLibrary);
      return;
    }

    setGamesArray(
      gamesLibrary.filter(game =>
        game.tags.includes(selectedFilter.toLowerCase())
      )
    );
  }, [selectedFilter, gamesLibrary, setGamesArray]);

  return { selectedFilter, setSelectedFilter };
}