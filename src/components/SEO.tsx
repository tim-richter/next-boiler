import { NextSeo } from 'next-seo';
import { SEOMeta } from '@customTypes';

interface Props {
  meta: SEOMeta;
}

const SEO = ({ meta }: Props) => {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <NextSeo {...meta} />
  );
};

export default SEO;
