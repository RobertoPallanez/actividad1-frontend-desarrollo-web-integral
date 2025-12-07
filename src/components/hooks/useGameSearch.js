import { useState } from "react";

export function useGameSearch(gamesLibrary) {
  const [gameName, setGameName] = useState("");
  const [gamesArray, setGamesArray] = useState(gamesLibrary);

  function searchGame(e) {
    if (e) e.preventDefault();

    setGamesArray(
      gamesLibrary.filter(game =>
        game.title.toLowerCase().includes(gameName.toLowerCase())
      )
    );
  }

  function resetSearch() {
    setGamesArray(gamesLibrary);
  }

  return {
    gameName,
    setGameName,
    gamesArray,
    setGamesArray,
    searchGame,
    resetSearch,
  };
}