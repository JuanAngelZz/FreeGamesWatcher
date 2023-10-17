const About = () => {
  return (
    <>
      <section className="flex items-center justify-around">
        <div className="w-1/2">
          <h1 className="text-3xl mb-4 font-bold">About</h1>
          <p>
            FreeGamesWatcher is a web application designed for gaming
            enthusiasts who are looking for free PC games. The goal is to provide
            you with an easy and convenient way to discover games that are
            currently available for free, including free-games offers and giveaways
            from platforms such as the Epic Games Store, Steam, Origin, and
            more.
          </p>
          <br />
          <p>
            It also offer detailed information about each game, including
            screenshots, descriptions, tags and system requirements. This way, you
            can make informed decisions and find games that suit your
            preferences and tastes.
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
            and <strong>"The Free-To-Play Games Database API"</strong> provided
            by{" "}
            <a
              href="https://www.freetogame.com"
              target="_blank"
              rel="noreferrer"
              className="font-bold"
            >
              FreeToGame.com
            </a>
            . These APIs enable us to gather the latest information and updates
            on free games, ensuring that you have access to the most
            comprehensive and up-to-date selection of free gaming options.
          </p>
        </div>
        <img
          src="/src/assets/aboutPoster.jpeg"
          alt=""
          className="w-2/5 rounded-xl shadow-lg shadow-slate-700 hover:scale-105 transition-transform"
        />
      </section>
    </>
  );
};

export default About;
