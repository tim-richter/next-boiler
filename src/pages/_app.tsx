import { appWithTranslation } from 'next-i18next';
import { AppProps } from 'next/app';
import '@styles/global.css';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(MyApp);
