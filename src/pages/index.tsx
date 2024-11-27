import { GetStaticProps } from 'next';
import { fetchRootPages } from '@/queries/contentful';
import ComposeSections from '@/components/Section/ComposeSections';

interface HomePageProps {
  page: {
    title: string;
    sectionsCollection: any;
  } | null;
}

export const getStaticProps: GetStaticProps = async () => {
  const pages = await fetchRootPages();
  const page = pages.pageCollection.items.find((p) => p.slug === '/');

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: { page },
  };
};

const HomePage: React.FC<HomePageProps> = ({ page }) => {
  if (!page) {
    return <p>Page not found</p>;
  }

  return (
    <>
      <ComposeSections sections={page.sectionsCollection} />
    </>
  );
};

export default HomePage;
