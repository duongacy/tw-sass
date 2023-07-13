import '@/styles/tailwind.css';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import 'focus-visible';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { JSX, useState } from 'react';

export default function App({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <ThemeProvider attribute='class'>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
