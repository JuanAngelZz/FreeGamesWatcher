export const sortBy = (category) => {
  switch (category) {
    case "popular-games":
      return ["popularity", "Popular Games"];
    case "new-games":
      return ["release-date", "New Games"];
    case "best-games":
      return ["relevance", "Best Games"];
    default:
      return [false, false];
  }
};
