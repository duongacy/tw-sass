import 'focus-visible';
import '@/styles/tailwind.css';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import type { AppProps } from 'next/app';
import { useState, JSX } from 'react';

export default function App({
  Component,
  pageProps,
}: AppProps): JSX.Element {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
}
