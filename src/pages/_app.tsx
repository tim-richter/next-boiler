import React from 'react';
import { IdProvider } from '@radix-ui/react-id';
import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import '@styles/global.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  );
}

export default appWithTranslation(MyApp);
