import React from 'react';
import Text from '@components/Text/Text';
import { InferGetStaticPropsType } from 'next';
import Heading from '@components/Heading/Heading';
import { baseStaticHandler } from '../util/getProps';
import Page from '../layouts/Page';

export const getStaticProps = baseStaticHandler({
  translationNamespaces: ['common', 'home'],
  meta: {
    title: 'Homepage',
    description: 'The homepage.',
  },
});

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home = ({ language, translations, meta }: Props) => {
  return (
    <Page meta={meta}>
      <Heading as="h1">Next Boiler</Heading>
      <Text size="large">Hi this is vanilla-extract!</Text>
      <button
        type="button"
        onClick={() => {
          throw new Error('Sentry Frontend Error');
        }}
      >
        Test Sentry Frontend Error
      </button>
    </Page>
  );
};

export default Home;
