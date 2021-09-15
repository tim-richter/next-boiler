import React from 'react';
import Text from '@components/Text';
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

const Home = ({
  language,
  translations,
  meta,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <Page>
      <Text size={1}>Hi this is stitches!</Text>
    </Page>
  );
};

export default Home;
