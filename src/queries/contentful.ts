
import gql from "graphql-tag";
import apolloClient from "../lib/apolloClient";

export async function getContacts() {
  const { data } = await apolloClient.query({
    query: gql`
        query GetAllPosts {
            contacts(id: "4NJnFzGla2SqrjbB5I8098") {
                phone
                email
                workTime
            },
            pageCollection {
                items {
                    title
                    slug
                }
            }
        }
    `,
  });
  return data;
}


export default { getContacts };