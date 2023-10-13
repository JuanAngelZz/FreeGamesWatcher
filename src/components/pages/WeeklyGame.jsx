import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getGiveAwayById } from "../../selectors/getGiveAwayById";
import GiveAwayInfo from "../common/GiveAwayInfo";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { FaShoppingCart } from "react-icons/fa";

const WeeklyGame = () => {
  const { id } = useParams();

  const navigate = useNavigate();
  const handleBack = () => navigate(-1);

  const [giveaway, setGiveaway] = useState({});

  useEffect(() => {
    getGiveAwayById(id).then((g) => {
      setGiveaway(g);
    });
  }, [id]);

  const { title, end_date, instructions, open_giveaway_url } = giveaway || {};

  let arrSplit = instructions ? instructions.split(/\d+\. /) : [];
  arrSplit.shift();

  return (
    <div className="flex gap-14 justify-between">
      <section className="flex-grow">
        <div className="flex items-center">
        <PiPaperPlaneRightFill
          onClick={handleBack}
          className="text-red-600 text-3xl mr-3 hover:rotate-180 transition-all cursor-pointer relative top-[-6px]"
        />
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        </div>
        <div className="flex items-center mb-2">
          <span className="bg-blue-700 font-bold py-[2px] px-4 rounded-3xl mr-2 hover:opacity-80">
            FREE
          </span>
          <p className="opacity-80">Available until: {end_date}</p>
        </div>
        <hr className="my-5" />
        <div className="w-full">
          <h3 className="text-xl font-medium mb-4">Instructions</h3>
          <ol className="list-decimal px-6 mb-10">
            {arrSplit.length > 0 ? (
              arrSplit.map((i, index) => (
                <li key={index} className="mb-2" dangerouslySetInnerHTML={{ __html: i }}>
                </li>
              ))
            ) : (
              <span>Cargando...</span>
            )}
          </ol>
          <a
            href={open_giveaway_url}
            target="_blank"
            rel="noreferrer"
            className="float-right bg-amber-500 text-slate-800 text-xl font-bold py-3 px-4 rounded hover:bg-amber-600"
          >
            <FaShoppingCart className="inline mr-2" />
            Claim Now
          </a>
        </div>
      </section>
      <GiveAwayInfo {...giveaway} />
    </div>
  );
};

export default WeeklyGame;
