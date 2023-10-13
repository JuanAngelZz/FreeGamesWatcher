export const getGiveAways = async (store) => {
  const url = `https://gamerpower.p.rapidapi.com/api/giveaways?platform=${store}&type=game&sort-by=date`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "ecd4aeccaamsh5ea6ed30e855ab8p183e0ejsncf9b94e993ac",
      "X-RapidAPI-Host": "gamerpower.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
};
