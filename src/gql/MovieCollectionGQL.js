import { gql } from "apollo-boost";

// Queries

export const MOVIE_COLLECTIONS = gql`
  query movieCollections {
    movieCollections {
      id
      title
    }
  }
`;

export const MOVIE_COLLECTION = gql`
  query movieCollection($id: Int!) {
    movieCollection(id: $id) {
      id
      title
      movies {
        id
        comments
        movie {
          id
          tmdbId
          title
          titlePrefix
          releaseYear
          picPath
        }
      }
    }
  }
`;

export const MOVIE_COLLECTION_AND_ITEMS = gql`
  query movieCollectionAndItems($id: Int!, $collectionId: Int) {
    movieCollection(id: $id) {
      id
      title
    }
    collectionItems(collectionId: $collectionId) {
      id
      comments
      views
      movie {
        id
        title
        titlePrefix
        releaseYear
        picPath
      }
    }
  }
`;
