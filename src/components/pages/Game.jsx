import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { getGameById } from "../../selectors/getGameById";
import Slider from "../common/Slider";
import SystemRequirements from "../common/SystemRequirements";
import GameDescription from "../common/GameDescription";
import GameInfo from "../common/GameInfo";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { BsFillCaretRightFill } from "react-icons/bs";

const Game = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const [game, setGame] = useState({});

  const {
    id: gameId,
    title,
    description,
    game_url,
    minimum_system_requirements,
    screenshots,
  } = useMemo(() => game, [game]);

  useEffect(() => {
    const getGame = async () => {
      const newGame = await getGameById(id);
      setGame(newGame);
    };

    getGame().catch((e) => console.error(`Error: ${e}`));
  }, [id]);

  const { os, processor, memory, graphics, storage } =
    minimum_system_requirements ?? {};

  return (
    <>
      {game ? (
        <>
          <PiPaperPlaneRightFill
            onClick={handleBack}
            className="text-red-600 text-3xl inline-block mr-3 hover:rotate-180 transition-all cursor-pointer relative top-[-6px]"
          />
          <h2 className="text-3xl mb-8 inline-block">{title}</h2>
          <div className="flex gap-8 mb-4">
            {screenshots ? (
              <Slider screenshots={screenshots} />
            ) : (
              <span>Cargando...</span>
            )}
            <GameInfo {...game} />
          </div>
          <a
            href={game_url}
            target="_blank"
            rel="noreferrer"
            className="py-3 px-5 ml-5 bg-amber-500 text-slate-800 hover:bg-slate-300 transition-all text-xl font-bold rounded"
          >
            Play Now
            <BsFillCaretRightFill className="inline text-2xl" />
          </a>
          <GameDescription>{description}</GameDescription>
        </>
      ) : (
        <Navigate to="/" />
      )}
      <hr />
      <SystemRequirements
        os={os}
        memory={memory}
        graphics={graphics}
        processor={processor}
        storage={storage}
      />
      <div className="flex justify-between mt-16">
        <Link to={`/game/${gameId - 1}`} className="p-2 rounded bg-blue-800">
          Previous Game
        </Link>
        <Link to={`/game/${gameId + 1}`} className="p-2 rounded bg-blue-800">
          Next Game
        </Link>
      </div>
    </>
  );
};

export default Game;
