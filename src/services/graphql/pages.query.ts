import { gql } from '@apollo/client'
import client from '../../../apollo-client'

export const queryPageBySlug = async (slug: string | null, locale: string) => {
  const { data } = await client.query({
    query: gql`
          query Pages {
            pages (
              locale: "${locale}",
              filters: {
                slug: {eq: "${slug || 'home'}"}
              }
            ){
              data{
                attributes{
                  title
                  slug
                  description
                  sections{
                    __typename
                    ... on ComponentSectionsWelcome {
                      id
                      primary_text
                      main_text
                      secondary_text
                    }
                    ... on ComponentSectionsWorkExperience {
                      id
                      title
                      items (pagination: { limit: 100 }) {
                        id
                        company_name
                        position
                        start_date
                        end_date
                        description
                      }
                    }
                    ... on ComponentSectionsSkills {
                      id
                      title
                      since_label
                      skills (pagination: { limit: 100 }){
                        id
                        name
                        since
                        icon{
                          data {
                            attributes{
                              url
                            }
                          }
                        }
                      }
                    }
                    ... on ComponentSectionsAboutMe {
                      id
                      title
                      description
                      avatar {
                        data{
                          attributes{
                            formats
                          }
                        }
                      }
                      social_media_title
                      social_media (pagination: { limit: 100 }) {
                        id
                        title
                        url
                        type
                        icon {
                          data{
                            attributes {
                              ext
                              url
                            }
                          }
                        }
                      }
                    }
                    ... on ComponentSectionsGoals{
                      id
                      title
                      items (pagination: { limit: 100 }) {
                        id
                        title
                        description
                      }
                    }
                  }
                }
              }
            }
          }
        `,
  })

  return data.pages.data
}

export const queryPages = async () => {
  const { data } = await client.query({
    query: gql`
      query Pages {
        pages {
          data {
            attributes {
              title
              slug
              description
              locale
              localizations {
                data {
                  attributes {
                    slug
                    locale
                  }
                }
              }
            }
          }
        }
      }
    `,
  })
  return data.pages.data
}
