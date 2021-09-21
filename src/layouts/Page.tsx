import React from 'react';
import { SEOMeta, WithChildren } from '@customTypes';
import SEO from '@components/SEO';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

interface PageProps {
  meta: SEOMeta;
}

const Page = ({ children, meta }: WithChildren<PageProps>) => {
  return (
    <>
      <SEO meta={meta} />
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Page;
