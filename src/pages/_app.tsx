import { theme } from '@/styles/theme';
import { ChakraProvider } from '@chakra-ui/react';

import { SidebarDrawerProvider } from '../Context/SidebarContext';
import { makeServer } from '../services/miraje';

import type { AppProps } from 'next/app';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <Component {...pageProps} />
      </SidebarDrawerProvider>
    </ChakraProvider>
  );
}

