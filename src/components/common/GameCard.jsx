import { Link } from "react-router-dom";
import GameCardTag from "./GameCardTag";

const GameCard = ({ title, thumbnail, description, genre, url, id }) => {
  return (
    <article className="block max-w-[280px] h-[438px] bg-gray-700 rounded-xl shadow-xl transition-all hover:scale-105 flex-shrink-0 hover:shadow-lg hover:shadow-slate-600">
      <img
        src={thumbnail}
        alt={`${title} thumbnail`}
        className="rounded-t-xl h-[158px]"
      />
      <div className="h-[280px] flex flex-col justify-between">
        <div className="p-6 max-h-[264px]">
          <Link to={`/game/${id}`}>
            <h3 className="text-2xl mb-2 font-semibold">{title}</h3>
          </Link>
          <p className="opacity-80 text-sm mb-4 max-h-20 overflow-scroll">
            {description}
          </p>
          <div className="flex items-center mb-2">
            <span className="text-sm text-gray-400 mr-2">Genre:</span>
            <GameCardTag genre={genre} />
          </div>
        </div>
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="block bg-amber-500 text-white rounded-b-xl text-center py-2 font-semibold text-lg transition-all hover:bg-amber-600"
        >
          Get It Now
        </a>
      </div>
    </article>
  );
};

export default GameCard;