import React from "react";
import { FlexContainer } from "../styles/Containers";
import {
  CardMovieSummaryStyle,
  CardSectionHeadingStyle,
} from "../styles/Typography";

// If comments for the CollectionItem exist and based on the isShowingAddComments prop passed, either the existing comments are shown or a short form to enter comments is shown.
// The UpdateCollectionItem component is used to update the comments
export const CollectionItemComments = ({ comments }) => {
  const variants = {
    closed: {
      height: 0,
      opacity: 0,
    },
    open: {
      height: "auto",
      opacity: 1,
    },
    transition: {
      damping: 300,
    },
  };

  return (
    <>
      <FlexContainer
        variants={variants}
        initial="closed"
        animate="open"
        exit="closed"
        transition="transition"
        flexDirection="column"
        padding="0"
        overflow="hidden"
        marginBottom
      >
        <CardSectionHeadingStyle>Comments</CardSectionHeadingStyle>

        <CardMovieSummaryStyle>
          {comments ? comments : "Nothing yet..."}
        </CardMovieSummaryStyle>
      </FlexContainer>
    </>
  );
};
