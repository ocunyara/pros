import { fetchRootPages } from "@/queries/contentful";

// Fetch only necessary data for the home page
export async function getStaticProps() {
  const pages = await fetchRootPages();
  const homePage = pages.pageCollection.items.find((p) => p.slug === "/");

  return {
    props: { page: homePage },
    revalidate: 60, // Revalidate every 60 seconds (optional, if you want to keep the content fresh)
  };
}

export default function HomePage({ page }) {
  return (
    <div>
      <h1>{page.title}</h1>
      <div>123123123123123</div>
    </div>
  );
}