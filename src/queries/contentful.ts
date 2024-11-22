import apolloClient from "@/lib/apolloClient";
import {
  GET_ABOUT_HERO_BANNER,
  GET_ABOUT_US_BLOCK,
  GET_CONTACTS,
  GET_PAGES_PATH,
  GET_SPLIT_MEDIA_SECTION
} from '@/queries/query'

export async function getContacts() {
  const { data } = await apolloClient.query({
    query: GET_CONTACTS
  });
  return data;
}

export async function fetchRootPages() {
  const { data } = await apolloClient.query({
    query : GET_PAGES_PATH
  });
  return data;
}

export async function getAboutUs(id: string) {
  const { data } = await apolloClient.query({
    query: GET_ABOUT_US_BLOCK,
    variables: { id },
  });

  return data.aboutUs;
}

export async function getHeroBanner(id: string) {
  const { data } = await apolloClient.query({
    query: GET_ABOUT_HERO_BANNER,
    variables: { id },
  });

  return data.heroBannerSection;
}

export async function getSplitMediaSection(id: string) {
  const { data } = await apolloClient.query({
    query: GET_SPLIT_MEDIA_SECTION,
    variables: { id },
  });

  return data.splitMediaSection;
}