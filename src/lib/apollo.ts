import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vjyept1m8301ui8lmw0038/master',
    cache: new InMemoryCache()
})