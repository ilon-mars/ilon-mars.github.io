import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';
import { GRAPHQL_ENDPOINT } from '@/utils/constants';

const httpLink = createHttpLink({
  uri: GRAPHQL_ENDPOINT,
  headers: {
    Authorization: `Bearer ${import.meta.env.GRAPHQL_TOKEN}`,
  },
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
