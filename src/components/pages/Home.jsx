import { useEffect, useState } from "react";
import { getGiveAways } from "../../selectors/getGiveAways";
import BigGiveAwayCard from "../common/BigGiveawayCard";
import Slider from "../common/Slider";
import GiveAwayCard from "../common/GiveAwayCard";
import { useGames } from "../../hooks/useGames";
import GameCard from "../common/GameCard";
import GiveAwayContainer from "../common/GiveAwayContainer";
import { VscGraphLine } from "react-icons/vsc"
import Loading from "../common/Loading";

const Home = () => {
  const [giveaways, setGiveaways] = useState({ steam: [], epic: [] });

  const { games: latestGames, getData: getDataLatest } = useGames(
    6,
    "release-date"
  );
  const { games: popularGames, getData: getDataBest } = useGames(6, "popularity");

  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const getGiveawaysData = async () => {
      try {
        const obtainedGiveaways = await getGiveAways("pc");

        setGiveaways(obtainedGiveaways);

        await getDataLatest();
        await getDataBest();

        setIsLoad(true);
      } catch (error) {
        console.error(error);
      }
    };

    getGiveawaysData().catch();
  }, []);

  return isLoad ? (
    <>
      <h2 className="text-3xl text-center font-bold mb-8">
        Hot this <span className="text-red-600">Week</span>
        <VscGraphLine className="inline-block ml-2 text-red-600" />
      </h2>
      {latestGames.length > 0 && (
        <Slider
          classChild={
            "mySwiper h-[400px] w-[750px] flex-shrink-0 mb-4 mx-auto rounded border-slate-950 border-4 shadow-lg shadow-slate-950 hover:scale-105 transition-all"
          }
          id={latestGames[0].id}
        />
      )}
      {giveaways.length > 0 && (
        <section className="flex gap-5 pb-6 pt-4 rounded-t-lg bg-gray-800 px-4">
          <BigGiveAwayCard {...giveaways[0]} />
          <BigGiveAwayCard {...giveaways[1]} />
        </section>
      )}
      {giveaways.length > 0 && (
        <section className="flex justify-between pb-4 mb-8 rounded-b-lg bg-gray-800 px-4 shadow-lg shadow-slate-950">
          <GiveAwayCard {...giveaways[2]} />
          <GiveAwayCard {...giveaways[3]} />
          <GiveAwayCard {...giveaways[4]} />
        </section>
      )}
      {latestGames.length > 0 && (
        <GiveAwayContainer
          ChildrenComponent={GameCard}
          games={latestGames}
          title={"Latest Added Games"}
        />
      )}
      {popularGames.length > 0 && (
        <GiveAwayContainer
          ChildrenComponent={GameCard}
          games={popularGames}
          title={"Popular Free-To-Play Games"}
          right
        />
      )}
    </>
  ) : (
    <Loading>Loading...</Loading>
  );
};

export default Home;
