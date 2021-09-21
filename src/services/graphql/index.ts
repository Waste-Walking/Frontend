import {
    ApolloClient,
    InMemoryCache,
    HttpLink,
    from,
    NormalizedCacheObject,
} from "@apollo/client"
import { onError } from "@apollo/client/link/error"
import * as constants from "../../constants"

const graphQLEndpoint = constants.API_BASE_URL + "/graphql"

let apolloClient: ApolloClient<NormalizedCacheObject> | null = null

const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.error(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        )
    if (networkError) console.error(`[Network error]: ${networkError}`)
})

const link = from([errorLink, new HttpLink({ uri: graphQLEndpoint })])

const createApolloClient = new ApolloClient({
    ssrMode: typeof window === "undefined",
    cache: new InMemoryCache(),
    link: link,
})

export const initializeApollo = () => {
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === "undefined") {
        return createApolloClient
    }

    // Create the Apollo Client once in the client
    if (!apolloClient) {
        apolloClient = createApolloClient
    }
    return apolloClient
}
