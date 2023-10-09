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
    <div className="bg-slate-800 flex-grow h-[400px] rounded-xl">
      <img
        src={thumbnail}
        alt={`${title} thumbnail`}
        className="rounded-t-xl"
      />
      <div className="h-60 px-4 text-sm flex flex-col justify-evenly">
        <p className="max-h-[100px] overflow-scroll">{short_description}</p>
        <div>
          <p>
            <span className="opacity-50 inline-block w-24 mr-4">
              Release Date:
            </span>
            {release_date}
          </p>
          <p>
            <span className="opacity-50 inline-block w-24 mr-4">
              Developer:
            </span>
            {developer}
          </p>
          <p>
            <span className="opacity-50 inline-block w-24 mr-4">
              Publisher:
            </span>
            {publisher}
          </p>
        </div>
        <span className="">
          Genre:
          <a
            href="#"
            className="inline-block p-2 rounded bg-gray-600 hover:bg-red-600 transition-all text-xs ml-4"
          >
            {genre}
          </a>
        </span>
      </div>
    </div>
  );
};

export default GameInfo;
