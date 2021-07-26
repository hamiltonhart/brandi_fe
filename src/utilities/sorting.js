export const movieSortingABC = (array) => {
  const outputList = array.sort((a, b) => {
    if (a.movie.title < b.movie.title) {
      return -1;
    }
    if (a.movie.title > b.movie.title) {
      return 1;
    }
    return 0;
  });
  return outputList;
};
