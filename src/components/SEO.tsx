import React from 'react';
import { SEOMeta } from '@customTypes';
import { NextSeo } from 'next-seo';

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
