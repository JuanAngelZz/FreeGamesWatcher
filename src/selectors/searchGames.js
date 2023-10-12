import { sortOptions } from "../constants/sortOptions";
import { genres } from "../constants/genres";
import { removeDuplicates } from "../helpers/removeDuplicates";

export const searchGames = async (load, sort, tags, name) => {

  const patchedTags = tags.map((t) => {
    if (t == "arpg" || t == "mmoarpg") {
      return "action-rpg";
    }
    if (t == "card-game") {
      return "card";
    }
    return t;
  });

  const remDuplicatesTags = removeDuplicates(patchedTags)

  if (!remDuplicatesTags.every((t) => genres.includes(t))) {
    throw new Error("Error obtaining tags: " + tags);
  }

  if (!sortOptions.includes(sort)) {
    throw new Error(
      "Only can be sorted by the following options: " + sortOptions.join()
    );
  }

  const searchTags = remDuplicatesTags.length > 0 ? remDuplicatesTags.join(".") : false;

  console.log(searchTags);
  const url = searchTags
    ? `https://free-to-play-games-database.p.rapidapi.com/api/filter?platform=pc&tag=${searchTags}&sort-by=${sort}`
    : `https://free-to-play-games-database.p.rapidapi.com/api/games?platform=pc&sort-by=${sort}`;

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

    if (name) {
      const filterGames = games.filter(({ title }) =>
        title.toLowerCase().includes(name.toLowerCase())
      );

      return filterGames.slice(0, load);
    }

    return games.slice(0, load);
  } catch (error) {
    console.error(`Error searchGame: ${error}`);
  }
};
