import { fetchRootPages } from "@/queries/contentful";

export async function getStaticPaths() {
  const pages = await fetchRootPages();

  const paths = pages.pageCollection.items
    .filter((page) => page.slug !== "/") // Exclude the home page
    .map((page) => ({
      params: { slug: page.slug },
    }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const pages = await fetchRootPages();

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

export default function Page({ page }) {
  return (
    <div>
      <h1>{page.title}</h1>
      <div>{/* Render content */}</div>
    </div>
  );
}
