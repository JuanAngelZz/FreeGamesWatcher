import { sortOptions } from "../constants/sortOptions";

export const getGamesSortedBy = async (sort = "alphabetical", load = 0) => {

  if (!sortOptions.includes(sort)) {
    throw new Error("Only can be sorted by the following options: " + sortOptions.join()) 
  }

  const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=${sort}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ecd4aeccaamsh5ea6ed30e855ab8p183e0ejsncf9b94e993ac",
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const games = await response.json();
    return load == 0
      ? games.slice(load, load + 13)
      : games.slice(load, load + 12);
  } catch (error) {
    console.error(`Error getGamesSortedBy: ${error}`);
  }
};
