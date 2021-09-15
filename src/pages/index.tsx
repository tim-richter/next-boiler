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

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home = ({ language, translations, meta }: Props) => {
  return (
    <Page meta={meta}>
      <Text size={1}>Hi this is stitches!</Text>
    </Page>
  );
};

export default Home;
