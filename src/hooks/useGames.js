import { useCallback, useState } from "react";
import { getGamesSortedBy } from "../selectors/getGamesSortedBy";

export const useGames = (sort = "aplhabetical") => {
  const [sortBy, setSortBy] = useState(sort);

  const [games, setGames] = useState([]);

  const [load, setLoad] = useState(0);

  const getData = useCallback(async () => {
    const data = await getGamesSortedBy(sortBy, load);
    setGames((prevGames) => [...prevGames, ...data]);
  }, [sortBy, load]);

  const handleLoadMore = () => {
    setLoad(games.length);
  };

  const resetGames = () => {
    setLoad(0);
    setSortBy(sort);
    setGames([]);
  };

  return {
    games,
    getData,
    handleLoadMore,
    resetGames,
  };
};
