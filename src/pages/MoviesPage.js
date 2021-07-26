import React from "react";
import { CollectionList } from "../components/MovieCollections";

import { FlexContainer } from "../components/styles/Containers";
import { PageHeadingStyle } from "../components/styles/Typography";

export const MoviesPage = () => {
  return (
    <FlexContainer flexDirection="column">
      <PageHeadingStyle marginBottom>Show Me The Movies!</PageHeadingStyle>
      <CollectionList />
    </FlexContainer>
  );
};
