import { useEffect, useState } from "react";
import { getGiveAways } from "../../selectors/getGiveAways";
import {
  SiEpicgames,
  SiSteam,
  SiGogdotcom,
  SiOrigin,
  SiUbisoft,
  SiBattledotnet,
} from "react-icons/si";
import GiveAwayContainer from "../common/GiveAwayContainer";

const WeeklyGames = () => {
  const [games, setGames] = useState({
    steam: [],
    epic: [],
    gog: [],
    origin: [],
    ubisoft: [],
    battle_net: [],
  });

  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const steamGames = await getGiveAways("steam");
        const epicGames = await getGiveAways("epic-games-store");
        const gogGames = await getGiveAways("gog");
        const originGames = await getGiveAways("origin");
        const ubisoftGames = await getGiveAways("ubisoft");
        const battlenetGames = await getGiveAways("battlenet");

        setGames({
          steam: steamGames,
          epic: epicGames,
          gog: gogGames,
          origin: originGames,
          ubisoft: ubisoftGames,
          battle_net: battlenetGames,
        });

        setIsLoad(true);
      } catch (error) {
        console.error(error);
      }
    };

    getData().catch();
  }, []);

  return isLoad ? (
    <>
      {games.steam.length > 0 && (
        <GiveAwayContainer
          games={games.steam}
          title="Steam Giveaways"
          icon={<SiSteam className="mr-2" />}
        />
      )}

      {games.epic.length > 0 && (
        <GiveAwayContainer
          games={games.epic}
          title="Epic Games Giveaways"
          icon={<SiEpicgames className="mr-2" />}
        />
      )}

      {games.gog.length > 0 && (
        <GiveAwayContainer
          games={games.gog}
          title="GOG.com Giveaways"
          icon={<SiGogdotcom className="mr-2" />}
        />
      )}

      {games.ubisoft.length > 0 && (
        <GiveAwayContainer
          games={games.ubisoft}
          title="Ubisoft Store Giveaways"
          icon={<SiUbisoft className="mr-2" />}
        />
      )}

      {games.battle_net.length > 0 && (
        <GiveAwayContainer
          games={games.battle_net}
          title="Battle.net Giveaways"
          icon={<SiBattledotnet className="mr-2" />}
        />
      )}

      {games.origin.length > 0 && (
        <GiveAwayContainer
          games={games.origin}
          title="Origin Giveaways"
          icon={<SiOrigin className="mr-2" />}
        />
      )}
    </>
  ) : (
    <span>Obtaining Giveaways...</span>
  );
};

export default WeeklyGames;
