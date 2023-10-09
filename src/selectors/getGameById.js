export const getGameById = async (id) => {
  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ecd4aeccaamsh5ea6ed30e855ab8p183e0ejsncf9b94e993ac",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const game = await response.json();
    if (game.status === 0) {
      return false;
    }
    return game;
  } catch (error) {
    console.log(`Error getGameById: ${error}`)
  }
};
