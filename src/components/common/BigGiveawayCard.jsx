import { Link } from "react-router-dom";

const BigGiveAwayCard = ({
  id,
  title,
  image,
  open_giveaway,
  worth,
  end_date,
}) => {
  let justDate = end_date.split(" ").shift();

  return (
    <article
      key={id}
      className="w-1/2 h-auto outline outline-4 outline-gray-700 hover:scale-105 transition-all hover:shadow-lg hover:shadow-slate-700"
    >
      <img
        src={image}
        alt={`${title} image`}
        className="w-full"
        loading="lazy"
      />
      <div className="bg-gray-600 h-40 p-4 flex flex-col justify-around">
        <header>
          <div className="flex">
            <span className="text-sm font-bold px-3 py-[2px] mr-4 bg-blue-700 rounded-2xl hover:opacity-80">
              Free
            </span>
            <p className="opacity-90 mr-2 text-sm">Worth:</p>
            <span className="text-green-600 font-bold text-sm">{worth}</span>
          </div>
          <h3 className="text-lg font-semibold my-2">
            <Link to={`/weekly-games/${id}`}>{title}</Link>
          </h3>
        </header>

        <footer className="flex justify-between items-center">
          <small className="text-sm opacity-70">End date: {justDate}</small>
          <a
            href={open_giveaway}
            target="_blank"
            rel="noreferrer"
            className="py-2 w-28 text-center bg-amber-500 hover:bg-amber-600 text-slate-800 rounded font-semibold transition-all"
          >
            Claim Now
          </a>
        </footer>
      </div>
    </article>
  );
};

export default BigGiveAwayCard;
