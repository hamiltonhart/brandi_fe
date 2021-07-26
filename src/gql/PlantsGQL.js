import { gql } from "apollo-boost";

export const GET_ALL_PLANTS = gql`
  query getAllPlants {
    plants {
      id
      name
    }
  }
`;

export const GET_PLANT = gql`
  query getPlant($id: Int!) {
    plant(id: $id) {
      id
      name
      sciName
      wateringInstructions
      comments
      types {
        typeLabel
      }
      plants {
        id
        location
      }
    }
  }
`;
