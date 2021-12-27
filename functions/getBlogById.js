import { gql } from 'graphql-request'
import { graphcms } from '../client'

export const getBlogById = async (id) => {
  const getBlogByIdQuery = gql`
    {
      blog(where: {id: $id}) {
            cover {
            url
            }
            createdAt
            id
            title
            content
        }
      }
    }
  `

  const { blog } = await graphcms.request(getBlogByIdQuery)

  return blog
}
