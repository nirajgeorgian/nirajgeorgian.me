/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { graphql } from 'gatsby'
import ThemeProvider from 'contexts/theme'
import SEO from 'components/seo'
import { Intro } from 'components/intro'
import Layout from 'components/layout'
import { BlogLinks } from 'templates/blog-post'

const Index: React.FC<any> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <ThemeProvider>
      <Layout>
        <SEO title="Homepage" />
        <Intro />
        {posts.map(({ node }: any) => {
          const title = node.frontmatter.title || node.fields.slug
          return <BlogLinks key={title} title={title} node={node} />
        })}
      </Layout>
    </ThemeProvider>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fields: { draft: { eq: false } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`
