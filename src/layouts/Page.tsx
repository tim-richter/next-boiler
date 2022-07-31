import SEO from '@components/SEO';
import { SEOMeta, WithChildren } from '@customTypes';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';

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
