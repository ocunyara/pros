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
      <h1 className="text-2xl font-bold mb-4 lg:mb-6 lg:text-4xl text-center">{page.title}</h1>
      <ComposeSections sections={page.sectionsCollection} />
    </>
  );
};

export default HomePage;
