import React from 'react'
import { Link, graphql } from 'gatsby'
import ThemeProvider from 'contexts/theme'
import SEO from 'components/seo'
import { Intro } from 'components/intro'
import { Article } from 'components/base'
import Layout from 'components/layout'

const Index: React.FC<any> = ({ data }) => {
  const posts = data.allMarkdownRemark.edges

  return (
    <ThemeProvider>
      <Layout>
        <SEO title="Homepage" />
        <Intro />
        {posts.map(({ node }: any) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Article key={node.fields.slug}>
              <header>
                <h3>
                  <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>
                <small>{node.frontmatter.date}</small>
              </header>
              <section>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt
                  }}
                />
              </section>
            </Article>
          )
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
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
