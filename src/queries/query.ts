'use client'

import {gql} from '@apollo/client';


export const GET_ABOUT_US_PAGE = gql`
  query {
  page(id: "6wsowOmbeHTbNa2UvPEOJm") {
    title
    sectionsCollection {
      doctors: items {
        ... on Doctor {
          name
          image {
            size
            url
            height
            width
          }
        }
      }
      splitMediaSections: items {
        ... on SplitMediaSection {
            title
        description {
          json
        }
        media {
          width
          height
          url
          title
        }
        addButton
        imagePosition
        }
      }
    }
  }
  }
`;
export const GET_HOME_PAGE = gql`
  query {
  page(id: "2G3ugNohTpF4MsuIndxiYH") {
    title
    sectionsCollection {
      doctors: items {
        ... on Doctor {
          name
          image {
            size
            url
            height
            width
          }
        }
      }
      splitMediaSections: items {
        ... on SplitMediaSection {
            title
        description {
          json
        }
        media {
          width
          height
          url
          title
        }
        addButton
        imagePosition
        }
      }
    }
  }
  }
`;
export const GET_CONTACTS = gql`
  query {
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
`;
export const GET_PAGES_PATH = gql`
    query {
        pageCollection {
            items {
                title
                slug
            }
        }
    }
`;
export const GET_PAGE = gql`
    query {
        pageCollection(where: { slug: "about-us" }) {
            items {
                sectionsCollection {
                    __typename
                    items {
                        __typename
                    }
                }
            }
        }
    }
`;
export const GET_ABOUT_US_BLOCK = gql`
  query {
   aboutUs(id: "1VGVdJ5SzvL43T2pYww8Xr") {
    title
    aboutUsDescription
    doctorsListCollection {
      items {
      ... on Doctor {
          name
          description {
            json
          }
          image {
            size
            url
            height
            width
          }
        }
      }
    }
  }
  }
`;

export const GET_HERO_BANNER = gql`
  query {
    heroBannerCollection {
      items {
       heroBannerTitle
       subTitle
       heroBannerImage {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        heroBannerReference {
          sys {
            spaceId
            id
          }
        
          ... on CustomButton {
            buttonTitle
            buttonUrl
          }
        }
      }
    }
  }
`;

export const GET_BLOG_POSTS = gql`
  query {
    blogCollection {
      items {
        title
        blogBanner {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        postLink
      }
    }
  }
`;

export const GET_SPLIT_MEDIA_SECTION = gql`
  query {
    splitMediaSectionCollection {
      items {
        title
        description {
          json
        }
        media {
          width
          height
          url
          title
        }
        addButton
        imagePosition
      }
    }
  }
`;

export const GET_BLOG_POST = gql`
 query GetBlogPost($link: String!) {
    blogCollection(where: { postLink: $link }) {
      items {
        title
        blogBanner {
          title
          description
          contentType
          fileName
          size
          url
          width
          height
        }
        description {
          json
        }
      }
    }
  }
`;