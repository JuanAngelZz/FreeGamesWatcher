const About = () => {
  return (
    <>
      <h1 className="text-3xl mb-4 font-bold">About</h1>
      <section className="w-1/2">
        <p>
          FreeGamesWatcher is a web application designed for gaming enthusiasts
          who are looking for free games. The goal is to provide you with an
          easy and convenient way to discover games that are currently available
          for free, including free offers and giveaways from platforms such as
          the Epic Games Store, Steam, Origin, and more.
        </p>
        <br />
        <p>
          All of this is made possible thanks to the{" "}
          <strong>"Game Giveaway Tracker API"</strong> provided by{" "}
          <a
            href="https://www.gamerpower.com"
            target="_blank"
            rel="noreferrer"
            className="font-bold"
          >
            GamerPower.com
          </a>{" "}
          and <strong>"The Free-To-Play Games Database API"</strong> provided by{" "}
          <a
            href="https://www.freetogame.com"
            target="_blank"
            rel="noreferrer"
            className="font-bold"
          >
            FreeToGame.com
          </a>
          .
        </p>
      </section>
    </>
  );
};

export default About;
