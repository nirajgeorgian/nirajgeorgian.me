import * as React from 'react'
import { graphql, Link } from 'gatsby'
import ThemeProvider, { ThemeContext } from 'contexts/theme'
import styled from 'styled-components'
import Layout from 'components/layout'
import { Article } from 'components/base'
import { useContext } from 'react'
import Image from 'gatsby-image'

export const BlogWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media (max-width: 680px) {
    padding: 0;
  }
`
export const BlogArticle = styled(Article)`
  width: 100%;
`
export const ArticleHeader = styled.h1`
  color: ${({ theme }) => (theme === 'dark' ? 'white' : 'black')};
`

export const BlogListHeader = styled(Link)`
  color: ${({ theme }) => (theme === 'dark' ? '#00adb5' : 'black')};
`

export const BlogPostLayout: React.FC = ({ children }) => (
  <ThemeProvider>
    <Layout>{children}</Layout>
  </ThemeProvider>
)

export const BlogLinks: React.FC<{ node: any; title: string }> = ({
  node,
  title
}) => {
  const { theme } = useContext(ThemeContext)

  return (
    <Article key={node.fields.slug}>
      <header>
        <h2>
          <BlogListHeader
            theme={theme}
            style={{ boxShadow: 'none' }}
            to={node.fields.slug}
          >
            {title}
          </BlogListHeader>
        </h2>
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
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const BlogPostTemplate: React.FC<{ data: any }> = ({ data }) => {
  const post = data.markdownRemark
  const { fields, frontmatter } = post
  const { banner } = frontmatter

  return (
    <BlogPostLayout>
      <ThemeContext.Consumer>
        {({ theme }) => (
          <BlogWrapper>
            <BlogArticle>
              <header>
                {banner ? <Image fluid={banner.childImageSharp.fluid} /> : null}
                <ArticleHeader theme={theme}>{fields.title}</ArticleHeader>
                <p>
                  {frontmatter.date} - <strong>{fields.author}</strong>
                </p>
              </header>
              <section dangerouslySetInnerHTML={{ __html: post.html }} />
            </BlogArticle>
          </BlogWrapper>
        )}
      </ThemeContext.Consumer>
    </BlogPostLayout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        title
        author
        description
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        banner {
          publicURL
          childImageSharp {
            id
            fixed {
              src
            }
            fluid(maxWidth: 1200) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
