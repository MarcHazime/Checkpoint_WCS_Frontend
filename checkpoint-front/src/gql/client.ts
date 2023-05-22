import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

export default new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: "cache-first",
    },
  },
  link: createHttpLink({
    uri: "https://countries.nausicaa.wilders.dev/",
  }),
});
