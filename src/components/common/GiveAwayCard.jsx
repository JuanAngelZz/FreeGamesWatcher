import { Link } from "react-router-dom";

const GiveAwayCard = ({
  id,
  title,
  thumbnail,
  open_giveaway,
  worth,
  end_date,
}) => {
  return (
    <article
      key={id}
      className="w-72 outline outline-4 outline-gray-700 hover:scale-105 transition-all"
    >
      <img src={thumbnail} alt={`${title} thumbnail`} className="h-40" />
      <div className="bg-gray-700 p-4">
        <header>
          <h3 className="text-lg font-bold mb-2">
            <Link to={`/weekly-games/${id}`}>{title}</Link>
          </h3>
        </header>
        <section className="flex flex-row-reverse items-center justify-between mb-2">
          <a
            href={open_giveaway}
            target="_blank"
            rel="noreferrer"
            className="py-2 px-4 bg-amber-500 hover:bg-amber-600 text-slate-800 rounded font-semibold transition-all"
          >
            Claim Now
          </a>
          <div>
            <span className="text-green-600">{worth}</span>
            <span className="text-sm font-bold px-2 py-[2px] ml-2 bg-blue-700 rounded-2xl hover:opacity-80">
              Free
            </span>
          </div>
        </section>
        <footer>
          <p className="text-sm opacity-80">End date: {end_date}</p>
        </footer>
      </div>
    </article>
  );
};

export default GiveAwayCard;
