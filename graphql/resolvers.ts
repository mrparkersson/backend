import { getPeople, searchPeople } from '../api';

const resolvers = {
  Query: {
    people: async (_, args, __) => {
      return await getPeople(args.page);
    },
    searchPeople: async (_, args, __) => {
      return await searchPeople(args.name);
    },
  },
};

export default resolvers;
