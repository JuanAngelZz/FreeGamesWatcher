import { useCallback, useState } from "react";
import { searchGames } from "../selectors/searchGames";

export const useGames = (
  initialLoad = 12,
  getSort = "alphabetical",
  getTags = [],
  getName = ""
) => {
  const [sortBy, setSortBy] = useState(getSort);
  const [tags, setTags] = useState(getTags);
  const [name, setName] = useState(getName);

  const [games, setGames] = useState([]);

  const [load, setLoad] = useState(initialLoad);

  const getData = useCallback(async () => {
    const data = await searchGames(load, sortBy, tags, name);
    if (data) {
      return data.length > 0
        ? setGames(data)
        : setGames([]);
    }
  }, [load, sortBy, tags, name]);

  const handleLoadMore = () => {
    setLoad(load + 12);
  };

  const resetGames = () => {
    setLoad(initialLoad);
    setSortBy(getSort);
    setTags(getTags);
    setName(getName);
    setGames([]);
  };

  return {
    games,
    getData,
    handleLoadMore,
    resetGames,
  };
};
