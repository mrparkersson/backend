import { gql } from 'apollo-server-core';

const typeDefs = gql`
  type Person {
    name: String!
    height: String!
    mass: String!
    gender: String!
    homeworld: String!
  }

  type Query {
    people(page: Int): [Person!]!
    searchPeople(name: String!): [Person!]!
  }
`;

export default typeDefs;
