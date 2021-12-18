import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_API_URL + "/graphql",
  cache: new InMemoryCache({
    resultCaching: false,
  }),
});

export default client;
