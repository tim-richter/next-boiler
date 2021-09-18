import React from 'react';
import Text from '@components/Text/Text';
import { InferGetStaticPropsType } from 'next';
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
      <Text size="large">Hi this is vanilla-extract!</Text>
    </Page>
  );
};

export default Home;
