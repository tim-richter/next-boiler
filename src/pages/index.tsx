import { InferGetStaticPropsType } from 'next';
import { useTranslation } from 'next-i18next';
import Heading from '@components/Heading/Heading';
import Text from '@components/Text/Text';
import { baseStaticHandler } from '@util/getProps';
import Page from '../layouts/Page';

export const getStaticProps = baseStaticHandler({
  translationNamespaces: ['common', 'home'],
  meta: {
    title: 'Homepage',
    description: 'The homepage.',
  },
});
type Props = InferGetStaticPropsType<typeof getStaticProps>;

const Home = ({ meta }: Props) => {
  const { t } = useTranslation(['home', 'common']);

  return (
    <Page meta={meta}>
      <Heading as="h1">{t('heading')}</Heading>
      <Text size="large">{t('text')}</Text>
      <button
        type="button"
        onClick={() => {
          throw new Error('Sentry Frontend Error');
        }}
      >
        {t('sentry_error')}
      </button>
    </Page>
  );
};

export default Home;
