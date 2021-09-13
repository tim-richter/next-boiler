import React from 'react';
import Header from '@components/header';
import Footer from '@components/footer';
import Cards from '@components/cards';
import Container from '@components/container';
import Main from '@components/main';
import SWRExample from '@components/examples/swr';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import I18NExampleComponent from '@components/examples/translate';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Cards />
      <Footer />
      <SWRExample />
      <I18NExampleComponent />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'home'])),
    },
  };
};

export default Home;
