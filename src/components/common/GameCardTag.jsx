import { Link } from "react-router-dom";

const GameCardTag = ({ genre }) => {
  const genreParse = genre.toLowerCase().replace(" ", "-");

  return (
    <Link
      to={`/find?name=&tags=${genreParse}&sort=relevance`}
      className="inline-block px-2 py-1 rounded bg-gray-600 hover:bg-red-600 transition-all text-xs"
    >
      {genre}
    </Link>
  );
};

export default GameCardTag;
