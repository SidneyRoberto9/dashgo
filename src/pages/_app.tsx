import { theme } from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from 'react-query';

import { SidebarDrawerProvider } from '../Context/SidebarContext';
import { makeServer } from '../services/miraje';

import type { AppProps } from 'next/app';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </QueryClientProvider>
    </ChakraProvider>
  );
}

