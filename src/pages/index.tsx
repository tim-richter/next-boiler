import React from 'react';
import Header from '@components/header';
import Footer from '@components/footer';
import Cards from '@components/cards';
import Container from '@components/container';
import Main from '@components/main';
import SWRExample from '@components/examples/swr';
import { GetStaticProps } from 'next';
import I18NExampleComponent from '@components/examples/translate';
import Text from '@components/Text';
import Accordion from '@components/Accordion';
import { baseStaticHandler } from '../util/getProps';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Text size={1}>Hi this is stitches!</Text>
      <Accordion
        defaultValue="value-1"
        data={[
          {
            content: 'Testi Test',
            trigger: 'This is a test',
            value: 'value-1',
          },
          {
            content: 'Testi Test',
            trigger: 'Another test',
            value: 'value-2',
          },
        ]}
      />
      <Cards />
      <Footer />
      <SWRExample />
      <I18NExampleComponent />
    </Container>
  );
};

export const getStaticProps: GetStaticProps = baseStaticHandler({
  translationNamespaces: ['common', 'home'],
});

export default Home;
