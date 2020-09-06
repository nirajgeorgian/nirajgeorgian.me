import React, { useContext } from 'react'
import { Link, graphql } from 'gatsby'
import ThemeProvider, { ThemeContext } from 'contexts/theme'
import { Header } from 'components/header'
import SEO from 'components/seo'
import { Intro } from 'components/intro'
import { Container, ContentContainer } from 'components/container'
import { Footer } from 'components/footer'
import { Article, Body } from 'components/base'

const Homepage: React.FC<any> = ({ data }) => {
  // const siteTitle = data.site.siteMetadata.title
  const posts = data.allMarkdownRemark.edges
  const { theme } = useContext(ThemeContext)

  return (
    <Container theme={theme}>
      <ContentContainer theme={theme}>
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
      </ContentContainer>
    </Container>
  )
}

const Index: React.FC<any> = ({ data }) => {
  return (
    <ThemeProvider>
      <Body>
        <Header />
        <Homepage data={data} />
        <Footer />
      </Body>
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
