import { useGameSearch } from "./useGameSearch";
import { useGameFilters } from "./useGameFilters";
import { useGenreFilter } from "./useGenreFilter";

export function useGamesLibrary(gamesLibrary) {
  // Filtrado por la barra de busqueda
  const {
    gameName,
    setGameName,
    gamesArray,
    setGamesArray,
    searchGame,
    resetSearch
  } = useGameSearch(gamesLibrary);

  // Filtrado por categorias
  const { selectedFilter, setSelectedFilter } =
    useGameFilters(gamesLibrary, setGamesArray);

  // Filtrado por generos
  const { selectedGenre, setSelectedGenre } =
    useGenreFilter(gamesLibrary, setGamesArray);

  return {
    // datos
    gamesArray,
    gameName,
    selectedFilter,
    selectedGenre,

    // metodos
    setGameName,
    setGamesArray,
    searchGame,
    resetSearch,
    setSelectedFilter,
    setSelectedGenre,
  };
}