import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import '../styles/normalize.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Hydrate } from 'react-query/hydration';
import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';
import { GamesProvider } from '../contextProviders/GamesContext';

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(() => new QueryClient());

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ReactQueryDevtools initialIsOpen={false} />
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <GamesProvider>
            {getLayout(<Component {...pageProps} />, pageProps)}
          </GamesProvider>
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default MyApp;
