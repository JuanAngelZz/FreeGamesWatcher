import { useEffect, useMemo, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getGameById } from "../../selectors/getGameById";
import Slider from "../common/Slider";
import SystemRequirements from "../common/SystemRequirements";
import GameDescription from "../common/GameDescription";
import GameInfo from "../common/GameInfo";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { BsFillCaretRightFill } from "react-icons/bs";
import Loading from "../common/Loading";
import { useGames } from "../../hooks/useGames";
import GiveAwayContainer from "../common/GiveAwayContainer";
import GameCard from "../common/GameCard";

const Game = () => {
  let { id } = useParams();
  const navigate = useNavigate();

  const handleBack = () => navigate(-1);

  const [game, setGame] = useState({});

  const [isLoad, setIsLoad] = useState(false);

  const {
    title,
    description,
    genre,
    game_url,
    minimum_system_requirements,
    screenshots,
  } = useMemo(() => game, [game]);

  const genreLc = genre ? [genre.toLowerCase()] : [];

  const { games, getData, resetGames } = useGames(6, "relevance", genreLc);

  useEffect(() => {
    setIsLoad(false);

    const getGame = async () => {
      const newGame = await getGameById(id);
      setGame(newGame);
    };

    getGame()
      .then(() => setIsLoad(true))
      .catch((e) => console.error(`Error: ${e}`));
  }, [id]);

  useEffect(() => {
    resetGames()
    getData()
  }, [genre]);

  const { os, processor, memory, graphics, storage } =
    minimum_system_requirements ?? {};

  return isLoad ? (
    <>
      {game ? (
        <>
          <PiPaperPlaneRightFill
            onClick={handleBack}
            className="text-red-600 text-3xl inline-block mr-3 hover:rotate-180 transition-all cursor-pointer relative top-[-6px]"
          />
          <h1 className="text-3xl mb-8 inline-block">{title}</h1>
          <div className="flex gap-8 mb-4">
            {screenshots ? (
              <Slider
                screenshots={screenshots}
                classChild={
                  "mySwiper h-96 w-4/6 flex-shrink-0 mb-8 mx-auto rounded border-slate-700 border-8 shadow-lg shadow-slate-700"
                }
              />
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
      <br />
      <br />
      <br />
      {games.length > 0 ? (
        <GiveAwayContainer
          games={games}
          title="Similar Games"
          ChildrenComponent={GameCard}
        />
      ) : <Loading>uola</Loading>}
    </>
  ) : (
    <Loading>Loading...</Loading>
  );
};

export default Game;
