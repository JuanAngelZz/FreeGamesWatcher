import { useEffect } from "react";
import { useGames } from "../../hooks/useGames";
import { Navigate, useParams } from "react-router-dom";
import { sortBy } from "../../helpers/sortBy";
import GameCard from "../ui/GameCard";
import Slider from "../ui/Slider";
import { FaChevronDown } from "react-icons/fa";

const Categories = () => {
  const { category } = useParams();

  const [getSort, getName] = sortBy(category);

  const { games, getData, handleLoadMore, resetGames } = useGames(getSort);

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
      <section className="flex gap-5 flex-wrap justify-center">
        {games.length > 0 ? (
          games.map(
            (
              { id, title, short_description, genre, thumbnail, game_url },
              index
            ) => {
              if (index === 0) {
                return null;
              }
              return (
                <GameCard
                  description={short_description}
                  title={title}
                  genre={genre}
                  thumbnail={thumbnail}
                  url={game_url}
                  id={id}
                  key={id}
                />
              );
            }
          )
        ) : (
          <div>Cargando...</div>
        )}
      </section>
      <button
        onClick={handleLoadMore}
        className="text-red-600 text-4xl mt-6 relative left-2/4 -translate-x-4 bottom-0 hover:-bottom-2 transition-all bg-transparent border-none outline-none cursor-pointer"
      >
        <FaChevronDown />
      </button>
    </>
  ) : (
    <Navigate to="/categories/new-games" />
  );
};

export default Categories;
