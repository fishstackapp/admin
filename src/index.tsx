import React from 'react';
import ReactDOM from 'react-dom/client';
import {ApolloProvider} from '@apollo/client'
import { apolloClient } from './core/apollo-client';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>
);
