import { GetStaticProps, GetStaticPaths } from 'next';
import { fetchRootPages } from "@/queries/contentful";
import ComposeSections from "@/components/Section/ComposeSections";

interface PageProps {
  pageCollection: {
    items: {
      slug: string
      title: string
    }[]
  }
}

interface ParamsProps {
  params: {
    slug: string;
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const pages: PageProps = await fetchRootPages();

  const paths = pages.pageCollection.items
    .filter((page) => page.slug !== "/")
    .map((page) => ({
      params: { slug: page.slug },
    }));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pages: PageProps = await fetchRootPages();
  const page = pages.pageCollection.items.find((p) => p.slug === params.slug);

  if (!page) {
    return {
      notFound: true,
    };
  }

  return {
    props: { page },
  };
}

const Page: React.FC<PageProps> = ({ page }) => {
  console.log(page)
  return (
    <>
      {/*<div className='bg-global text-center lg:py-32'>*/}
      {/*  <h1 className='text-2xl font-bold mb-4 lg:mb-6 lg:text-4xl text-center'>{page.title}</h1>*/}
      {/*  <p className='text-xl font-light'>{page.subHeader}</p>*/}
      {/*</div>*/}
      <ComposeSections sections={page.sectionsCollection}/>
    </>
  );
}

export default Page;