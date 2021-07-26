import React from "react";
import { useParams } from "@reach/router";
import { useQuery } from "@apollo/react-hooks";
import { GET_PLANT } from "../gql";

import { Loading, Error } from "../components/Global";

import {
  PageHeadingStyle,
  SectionHeadingStyle,
  SimplePStyle,
  TagStyle,
} from "../components/styles/Typography";
import { FlexContainer } from "../components/styles/Containers";

export const PlantPage = () => {
  const params = useParams();
  const { data, loading, error } = useQuery(GET_PLANT, {
    variables: { id: params.plantId },
  });

  return (
    <FlexContainer
      flexDirection="column"
      alignItems="center"
      maxWidth="1000px"
      minWidth="65%"
    >
      {loading && <Loading />}
      {error && <Error message={error.message} />}
      {data && (
        <>
          <PageHeadingStyle>{data.plant.name}</PageHeadingStyle>
          <FlexContainer flexDirection="column" padding="0 var(--smSpacing)">
            <section className="plant-tags">
              <FlexContainer as="ul" padding="0 var(--smSpacing)">
                {data.plant.types.map((type) => (
                  <li key={type.typeLabel}>
                    <TagStyle>
                      <a
                        href={`https://en.wikipedia.org/wiki/${type.typeLabel}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={`${type.typeLabel} on Wikipedia`}
                      >
                        {type.typeLabel}
                      </a>
                    </TagStyle>
                  </li>
                ))}
              </FlexContainer>
            </section>
            <section className="plant-locations">
              <SectionHeadingStyle marginTop>
                Where Are They? ({data.plant.plants.length})
              </SectionHeadingStyle>
              <ol>
                {data.plant.plants.map((plant) => (
                  <li key={plant.id}>
                    <SimplePStyle>{plant.location}</SimplePStyle>
                  </li>
                ))}
              </ol>
            </section>
            <section className="plant-watering">
              <SectionHeadingStyle marginTop>
                Water: When, Where, How?
              </SectionHeadingStyle>
              {data.plant.wateringInstructions ? (
                <SimplePStyle>{data.plant.wateringInstructions}</SimplePStyle>
              ) : (
                <SimplePStyle>Nothing yet...</SimplePStyle>
              )}
            </section>
            <section className="plant-comments">
              <SectionHeadingStyle marginTop>Comments</SectionHeadingStyle>
              {data.plant.comments ? (
                <SimplePStyle showBreaks>{data.plant.comments}</SimplePStyle>
              ) : (
                <SimplePStyle>Nothing yet...</SimplePStyle>
              )}
            </section>
          </FlexContainer>
        </>
      )}
    </FlexContainer>
  );
};
