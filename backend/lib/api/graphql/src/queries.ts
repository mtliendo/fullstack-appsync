/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPet = /* GraphQL */ `
  query GetPet($petID: String!) {
    getPet(petID: $petID) {
      id
      name
      type
    }
  }
`;
export const listPets = /* GraphQL */ `
  query ListPets {
    listPets {
      id
      name
      type
    }
  }
`;
