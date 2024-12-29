import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient('https://api.hashnode.com/v1/graphql')

const query = `
  query GetUserArticles($username: String!) {
    user(username: $username) {
      publication {
        posts(page: 1) {
          edges {
            node {
              id
              title
              brief
              slug
              coverImage {
                url
              }
              dateAdded
              readTime
              reactionCount
              responseCount
              tags {
                name
              }
            }
          }
        }
      }
    }
  }
`

export interface BlogPost {
  id: string
  title: string
  brief: string
  slug: string
  coverImage: {
    url: string
  }
  dateAdded: string
  readTime: number
  reactionCount: number
  responseCount: number
  tags: Array<{ name: string }>
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    const data = await client.request(query, {
      username: 'yourusername' // Replace with your Hashnode username
    })
    
    return data.user.publication.posts.edges.map((edge: any) => edge.node)
  } catch (error) {
    console.error('Error fetching blog posts:', error)
    return []
  }
}

