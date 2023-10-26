import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React from 'react'

export const Provider = ({children}) => {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql', // Replace with your backend GraphQL server URL
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}