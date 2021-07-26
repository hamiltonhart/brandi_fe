import React from "react";
import { Heading } from "./Heading";

import { PrimaryLayoutStyle } from "../styles/PrimaryLayoutStyle";
import { FlexContainer } from "../styles/Containers";

export const PrimaryLayout = ({ children }) => {
  return (
    <>
      <Heading />
      <PrimaryLayoutStyle>
        <FlexContainer
          flexDirection="column"
          alignItems="center"
          min-width="65%"
          maxWidth="1000px"
        >
          {children}
        </FlexContainer>
      </PrimaryLayoutStyle>
    </>
  );
};
