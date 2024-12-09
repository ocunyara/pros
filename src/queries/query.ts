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
                subHeader
                description {
                    json
                }
                sectionsCollection {
                    items {
                        __typename
                        ... on HeroBannerSection {
                            sys {
                                id
                            }
                        }
                        ... on AboutUs {
                            sys {
                                id
                            }
                        }
                        ... on SplitMediaSection {
                            sys {
                                id
                            }
                        }
                        ... on Carousel {
                            sys {
                                id
                            }
                        }
                        ... on DescriptionSection {
                            sys {
                                id
                            }
                        }
                    }
                }
            }
        }
    }
`;

export const GET_ABOUT_US_BLOCK = gql`
    query aboutUs($id: String!) {
      aboutUs(id: $id) {
      title
      aboutUsDescription
      doctorsListCollection {
        items {
        ... on Doctor {
            name
            description {
              json
            }
            education {
                json
            }
            certificates {
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
      fullInfo
    }
  }
`;
export const GET_ABOUT_HERO_BANNER = gql`
    query heroBannerSection($id: String!) {
        heroBannerSection(id: $id) {
        banersCollection {
          items {
          ... on PageBanner {
              title
              subTitle
              tabTitle
              button {
                  buttonTitle
                  buttonUrl
              }
              bannerImage {
                  url
                  size
                  title
                  width
                  height
              }
            }
          }
        }
    }
  }
`;

export const GET_SPLIT_MEDIA_SECTION = gql`
    query splitMediaSection($id: String!){
        splitMediaSection(id: $id) {
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
            addBackground
        }
    }
`;

export const GET_CAROUSEL = gql`
    query carousel($id: String!){
        carousel(id: $id) {
            title
            subTitle
            slidersCollection {
                items {
                    url
                    title
                    width
                    height
                }
            }
        }
    }
    
`;
export const GET_DESCRIPTION_SECTION = gql`
    query descriptionSection($id: String!){
        descriptionSection(id: $id) {
            title
            desciprtion {
                json
                links {
                    assets {
                        block {
                            size
                            description
                            url
                            width
                            height
                            sys {
                                id
                            }
                        }
                    }
                    entries {
                        __typename
                        inline {
                            sys {
                                id
                            }
                            __typename
                        }
                        block {
                            sys {
                                id
                            }
                            __typename
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