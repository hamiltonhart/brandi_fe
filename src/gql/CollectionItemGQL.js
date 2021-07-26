import { gql } from "apollo-boost";

// Queries
export const GET_COLLECTION_ITEM = gql`
  query collectionItem($id: Int!) {
    collectionItem(id: $id) {
      id
      comments
      id
      comments
      views
      movie {
        id
        tmdbId
        title
        titlePrefix
        summary
        releaseYear
        picPath
      }
    }
  }
`;
