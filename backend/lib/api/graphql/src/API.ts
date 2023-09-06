/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePetInput = {
  id?: string | null,
  name?: string | null,
  type?: string | null,
};

export type Pet = {
  __typename: "Pet",
  id: string,
  name?: string | null,
  type?: string | null,
};

export type UpdatePetInput = {
  id: string,
  name?: string | null,
  type?: string | null,
};

export type CreatePetMutationVariables = {
  input: CreatePetInput,
};

export type CreatePetMutation = {
  createPet?:  {
    __typename: "Pet",
    id: string,
    name?: string | null,
    type?: string | null,
  } | null,
};

export type UpdatePetMutationVariables = {
  input: UpdatePetInput,
};

export type UpdatePetMutation = {
  updatePet?:  {
    __typename: "Pet",
    id: string,
    name?: string | null,
    type?: string | null,
  } | null,
};

export type DeletePetMutationVariables = {
  petID: string,
};

export type DeletePetMutation = {
  deletePet?:  {
    __typename: "Pet",
    id: string,
    name?: string | null,
    type?: string | null,
  } | null,
};

export type GetPetQueryVariables = {
  petID: string,
};

export type GetPetQuery = {
  getPet?:  {
    __typename: "Pet",
    id: string,
    name?: string | null,
    type?: string | null,
  } | null,
};

export type ListPetsQuery = {
  listPets?:  Array< {
    __typename: "Pet",
    id: string,
    name?: string | null,
    type?: string | null,
  } | null > | null,
};
