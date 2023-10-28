import GameCard from "./GameCard";
import { FaChevronDown } from "react-icons/fa";

const GamesContainer = ({ games, handleLoadMore, skipFirst }) => {
  return (
    <>
      <section className="flex gap-5 flex-wrap justify-center">
        {games.length > 0 ? (
          games.map((game, index) => {
            if (skipFirst && index === 0) {
              return null;
            }
            return <GameCard {...game} key={game.id} />;
          })
        ) : (
          <div>Not games found</div>
        )}
      </section>
      {games.length >= 12 && (
        <button
          onClick={handleLoadMore}
          className="text-red-600 text-4xl mt-6 relative left-2/4 -translate-x-4 bottom-0 hover:-bottom-2 transition-all bg-transparent border-none outline-none cursor-pointer"
        >
          <FaChevronDown />
        </button>
      )}
    </>
  );
};

export default GamesContainer;
