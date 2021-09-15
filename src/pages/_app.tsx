import React from 'react';
import { AppProps } from 'next/app';
import '@styles/global.css';
import { appWithTranslation } from 'next-i18next';
import { IdProvider } from '@radix-ui/react-id';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <IdProvider>
      <Component {...pageProps} />
    </IdProvider>
  );
}

export default appWithTranslation(MyApp);
