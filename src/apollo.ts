import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core';

const httpLink = createHttpLink({
  uri: import.meta.env.GRAPHQL_ENDPOINT,
  headers: {
    Authorization: `Bearer ${import.meta.env.GRAPHQL_TOKEN}`,
  },
});

const cache = new InMemoryCache();

export const apolloClient = new ApolloClient({
  link: httpLink,
  cache,
});
