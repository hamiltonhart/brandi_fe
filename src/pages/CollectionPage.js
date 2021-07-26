import React, { createContext, useContext } from "react";
import { useParams } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";
import { MOVIE_COLLECTION_AND_ITEMS } from "../gql";

import { Loading, Error } from "../components/Global";
import { CollectionItemsList } from "../components/CollectionItems/CollectionItemsList";
import { PageHeadingStyle } from "../components/styles/Typography";

export const CollectionContext = createContext({});

export const CollectionPage = () => {
  const params = useParams();
  const { data, loading, error } = useQuery(MOVIE_COLLECTION_AND_ITEMS, {
    variables: { id: params.collectionId, collectionId: params.collectionId },
  });

  const context = useContext(CollectionContext);

  context.collection = data && data.movieCollection;
  context.collectionItems = data && data.collectionItems;

  return (
    <div>
      {loading && <Loading />}
      {error && <Error message={error.message} />}
      {data && (
        <>
          <PageHeadingStyle align="center">
            {data.movieCollection.title}
          </PageHeadingStyle>

          <div>
            <CollectionItemsList
              items={data.collectionItems}
              collectionId={params.collectionId}
            />
          </div>
        </>
      )}
    </div>
  );
};
