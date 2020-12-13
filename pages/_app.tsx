import '../styles/reset.css';
import type { AppProps } from 'next/app';
import { Provider } from 'next-auth/client';
import { ApolloProvider } from '@apollo/client';
import { useApollo } from '../apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
  const { session } = pageProps;
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <Provider session={session}>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </Provider>
  );
}

export default MyApp;
