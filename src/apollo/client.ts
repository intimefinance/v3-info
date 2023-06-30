import { ApolloClient, InMemoryCache } from '@apollo/client'

export const coreHealthClient = new ApolloClient({
  uri: 'https://thegraph.test.btcs.network/index-node/graphql',
  cache: new InMemoryCache(),
})

export const coreBlockClient = new ApolloClient({
  uri: 'https://thegraph.test.btcs.network/subgraphs/name/blocklytics/ethereum-blocks',
  cache: new InMemoryCache(),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
})

export const coreClient = new ApolloClient({
  uri: 'https://thegraph.test.btcs.network/subgraphs/name/uni8',
  cache: new InMemoryCache({
    typePolicies: {
      Token: {
        // Singleton types that have no identifying field can use an empty
        // array for their keyFields.
        keyFields: false,
      },
      Pool: {
        // Singleton types that have no identifying field can use an empty
        // array for their keyFields.
        keyFields: false,
      },
    },
  }),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
})

export const coreTestHealthClient = new ApolloClient({
  uri: 'https://thegraph.test.btcs.network/index-node/graphql',
  cache: new InMemoryCache(),
})

export const coreTestBlockClient = new ApolloClient({
  uri: 'https://thegraph.test.btcs.network/subgraphs/name/blocklytics/ethereum-blocks',
  cache: new InMemoryCache(),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
})

export const coreTestClient = new ApolloClient({
  uri: 'https://thegraph.test.btcs.network/subgraphs/name/uni8',
  cache: new InMemoryCache({
    typePolicies: {
      Token: {
        // Singleton types that have no identifying field can use an empty
        // array for their keyFields.
        keyFields: false,
      },
      Pool: {
        // Singleton types that have no identifying field can use an empty
        // array for their keyFields.
        keyFields: false,
      },
    },
  }),
  queryDeduplication: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
    query: {
      fetchPolicy: 'no-cache',
      errorPolicy: 'all',
    },
  },
})
