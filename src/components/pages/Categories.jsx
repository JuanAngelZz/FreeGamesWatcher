import { useEffect } from "react";
import { useGames } from "../../hooks/useGames";
import { Navigate, useParams } from "react-router-dom";
import { sortBy } from "../../helpers/sortBy";
import Slider from "../ui/Slider";
import GamesContainer from "../ui/GamesContainer";

const Categories = () => {
  const { category } = useParams();

  const [getSort, getName] = sortBy(category);

  const { games, getData, handleLoadMore, resetGames } = useGames(13, getSort);

  useEffect(() => {
    resetGames();
  }, [getSort]);

  useEffect(() => {
    getData();
  }, [getData]);

  const firstGameId = games.length > 0 ? games[0].id : null;

  return getSort ? (
    <>
      <h2 className="text-3xl font-bold mb-12">{getName}</h2>
      {games.length > 0 ? (
        <Slider id={firstGameId} />
      ) : (
        <span>Cargando...</span>
      )}
      <GamesContainer games={games} handleLoadMore={handleLoadMore} skipFirst />
    </>
  ) : (
    <Navigate to="/categories/new-games" />
  );
};

export default Categories;
