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
import { SlScreenDesktop } from "react-icons/sl"
import GiveAwayContainer from "../common/GiveAwayContainer";

const WeeklyGames = () => {
  const [games, setGames] = useState({
    steam: [],
    epic: [],
    gog: [],
    origin: [],
    ubisoft: [],
    battle_net: [],
    other_pc: [],
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
        const drmFreeGames = await getGiveAways("drm-free");

        setGames({
          steam: steamGames,
          epic: epicGames,
          gog: gogGames,
          origin: originGames,
          ubisoft: ubisoftGames,
          battle_net: battlenetGames,
          other_pc: drmFreeGames,
        });

        setIsLoad(true);
      } catch (error) {
        console.error(error);
      }
    };

    getData().catch();
  }, []);

  const { steam, epic, gog, ubisoft, battle_net, origin, other_pc } = games;

  return isLoad ? (
    <>
      {steam.length > 0 && (
        <GiveAwayContainer
          games={steam}
          title="Steam Giveaways"
          icon={<SiSteam className="mr-3" />}
        />
      )}

      {epic.length > 0 && (
        <GiveAwayContainer
          games={epic}
          title="Epic Games Giveaways"
          icon={<SiEpicgames className="mr-3" />}
        />
      )}

      {gog.length > 0 && (
        <GiveAwayContainer
          games={gog}
          title="GOG.com Giveaways"
          icon={<SiGogdotcom className="mr-3" />}
        />
      )}

      {ubisoft.length > 0 && (
        <GiveAwayContainer
          games={ubisoft}
          title="Ubisoft Store Giveaways"
          icon={<SiUbisoft className="mr-3" />}
        />
      )}

      {battle_net.length > 0 && (
        <GiveAwayContainer
          games={battle_net}
          title="Battle.net Giveaways"
          icon={<SiBattledotnet className="mr-3" />}
        />
      )}

      {origin.length > 0 && (
        <GiveAwayContainer
          games={origin}
          title="Origin Giveaways"
          icon={<SiOrigin className="mr-3" />}
        />
      )}

      {other_pc.length > 0 && (
        <GiveAwayContainer
          games={other_pc}
          title="DRM-Free PC Games"
          icon={<SlScreenDesktop className="mr-3" />}
        />
      )}
    </>
  ) : (
    <span>Obtaining Giveaways...</span>
  );
};

export default WeeklyGames;
