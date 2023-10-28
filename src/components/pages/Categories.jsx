import { useEffect, useState } from "react";
import { useGames } from "../../hooks/useGames";
import { Navigate, useParams } from "react-router-dom";
import { sortBy } from "../../helpers/sortBy";
import Slider from "../common/Slider";
import GamesContainer from "../common/GamesContainer";
import Loading from "../common/Loading";

const Categories = () => {
  const { category } = useParams();

  const [getSort, getName] = sortBy(category);

  const [isLoad, setIsLoad] = useState(false);

  const { games, getData, handleLoadMore, resetGames } = useGames(13, getSort);

  useEffect(() => {
    setIsLoad(false);
    resetGames();
  }, [getSort]);

  useEffect(() => {
    getData().then(() => setIsLoad(true));
  }, [getData]);

  const firstGameId = games.length > 0 ? games[0].id : null;

  if (!getSort) {
    return <Navigate to="/categories/new-games" />;
  }

  return isLoad ? (
    <>
      <h1 className="text-3xl font-bold mb-12">{getName}</h1>
      {
        <Slider
          id={firstGameId}
          classChild={
            "mySwiper h-[400px] w-[750px] flex-shrink-0 mb-8 mx-auto rounded border-slate-700 border-8 shadow-lg shadow-slate-700"
          }
        />
      }
      <GamesContainer games={games} handleLoadMore={handleLoadMore} skipFirst />
    </>
  ) : (
    <Loading>Loading...</Loading>
  );
};

export default Categories;
