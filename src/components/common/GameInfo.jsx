import GameCardTag from "./GameCardTag";

const GameInfo = ({
  thumbnail,
  title,
  short_description,
  release_date,
  developer,
  publisher,
  genre,
}) => {
  return (
    <div className="bg-slate-800 flex-grow max-h-[400px] max-w-[300px] rounded-xl">
      <img
        src={thumbnail}
        alt={`${title} thumbnail`}
        className="rounded-t-xl"
      />
      <div className="h-60 px-4 text-sm flex flex-col justify-evenly">
        <p className="max-h-[100px] overflow-scroll">{short_description}</p>
        <div>
          <p>
            <span className="opacity-50 inline-block w-24 mr-2">
              Release Date:
            </span>
            {release_date}
          </p>
          <p>
            <span className="opacity-50 inline-block w-24 mr-2">
              Developer:
            </span>
            {developer}
          </p>
          <p>
            <span className="opacity-50 inline-block w-24 mr-2">
              Publisher:
            </span>
            {publisher}
          </p>
        </div>
        <p>
          <span className="opacity-50 inline-block mr-2">Genre:</span>
          {genre && <GameCardTag genre={genre} />}
        </p>
      </div>
    </div>
  );
};

export default GameInfo;
