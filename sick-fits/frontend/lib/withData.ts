import withApollo, { InitApolloOptions } from 'next-with-apollo';
import ApolloClient from 'apollo-boost';
import { endpoint } from '../config';

const createClient = ({ headers }: InitApolloOptions<any>) => {
  return new ApolloClient({
    uri: process.env.NODE_ENV === 'development' ? endpoint : endpoint,
    request: (operation: any) => {
      operation.setContext({
        fetchOptions: {
          credentials: 'include',
        },
        headers,
      });
    },
  } as any);
};

export const withData = withApollo(createClient);
