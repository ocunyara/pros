import apolloClient from "@/lib/apolloClient";
import {GET_CONTACTS, GET_PAGES_PATH} from '@/queries/query'

export async function getContacts() {
  const { data } = await apolloClient.query({
    query: GET_CONTACTS
  });
  return data;
}

export async function getPage() {
  const { data } = await apolloClient.query({
    query: GET_CONTACTS
  });
  return data;
}

export async function fetchRootPages() {
  const { data } = await apolloClient.query({
    query: GET_PAGES_PATH
  });
  return data;
}

export async function getHomePage() {
  const { data } = await apolloClient.query({
    query: GET_CONTACTS
  });
  return data;
}