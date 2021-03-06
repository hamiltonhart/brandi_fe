export const findMatch = ({ items, title, releaseYear }) => {
  let matchFound;
  items.forEach((collectionItem) => {
    const contextTitle = collectionItem.movie.titlePrefix
      ? `${collectionItem.movie.titlePrefix} ${collectionItem.movie.title}`
      : `${collectionItem.movie.title}`;
    if (
      contextTitle === title &&
      collectionItem.movie.releaseYear === Number(releaseYear)
    ) {
      matchFound = collectionItem.id;
    }
  });
  return matchFound;
};
