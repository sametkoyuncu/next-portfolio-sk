import { gql } from 'graphql-request'
import { graphcms } from '../client'

export const getAllBlogs = async () => {
  const getAllBlogsQuery = gql`
    {
      blogs {
        id
        title
        content
        cover {
          url
        }
        createdAt
      }
    }
  `

  const { blogs } = await graphcms.request(getAllBlogsQuery)

  return blogs
}
