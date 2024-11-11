import { ApolloClient, InMemoryCache, ApolloLink, HttpLink } from "@apollo/client";

const TOKEN = 'tvksOBnnac7EyD4Frl1ZCbouwPtm7pGDfeAl327JQcU';
const SPACE = '369189qp2jl8'

if (!TOKEN || !SPACE) {
  throw new Error("CONTENTFUL_ACCESS_TOKEN and CONTENTFUL_SPACE_ID must be set in environment variables");
}

const URL = `https://graphql.contentful.com/content/v1/spaces/369189qp2jl8`;

console.log("Contentful Space ID:", SPACE);

const httpLink = new HttpLink({
  uri: URL,
  headers: {
    Authorization: `Bearer tvksOBnnac7EyD4Frl1ZCbouwPtm7pGDfeAl327JQcU`,
  },
});

const link = ApolloLink.from([httpLink]);

const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  link,
  cache,
});

export default apolloClient;
