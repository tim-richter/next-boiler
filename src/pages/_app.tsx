import React from 'react';
import { AppProps } from 'next/app';
import 'tailwindcss/tailwind.css';
import '@styles/global.css';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
