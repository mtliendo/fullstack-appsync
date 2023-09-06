/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPet = /* GraphQL */ `
  mutation CreatePet($input: CreatePetInput!) {
    createPet(input: $input) {
      id
      name
      type
    }
  }
`;
export const updatePet = /* GraphQL */ `
  mutation UpdatePet($input: UpdatePetInput!) {
    updatePet(input: $input) {
      id
      name
      type
    }
  }
`;
export const deletePet = /* GraphQL */ `
  mutation DeletePet($petID: String!) {
    deletePet(petID: $petID) {
      id
      name
      type
    }
  }
`;
