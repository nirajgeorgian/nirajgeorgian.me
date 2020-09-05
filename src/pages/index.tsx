import React from 'react'
import { Link, graphql } from 'gatsby'
import ThemeProvider from 'contexts/theme'
import { Header } from 'components/header'
import SEO from 'components/seo'
import { Intro } from 'components/intro'
import { Container } from 'components/container'
import { Footer } from 'components/footer'

const Index: React.FC<any> = ({ data }) => {
  // const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges

  return (
    <ThemeProvider>
      <Header />
      <Container>
        <SEO title="Homepage" />
        <Intro />
        {posts.map(({ node }: any) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article key={node.fields.slug}>
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
            </article>
          )
        })}
      </Container>
      <Footer />
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
