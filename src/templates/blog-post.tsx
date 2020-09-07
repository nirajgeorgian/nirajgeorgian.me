import * as React from 'react'
import { graphql } from 'gatsby'
import ThemeProvider from 'contexts/theme'
import styled from 'styled-components'
import Layout from 'components/layout'

export const BlogWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`

const BlogPostTemplate: React.FC<any> = ({ data }) => {
  const post = data.markdownRemark
  // const siteTitle = data.site.siteMetadata.title
  // const { previous, next } = pageContext

  return (
    <ThemeProvider>
      <Layout>
        <BlogWrapper>
          <article>
            <header>
              <h1>{post.frontmatter.title}</h1>
              <p>{post.frontmatter.date}</p>
            </header>
            <section dangerouslySetInnerHTML={{ __html: post.html }} />
          </article>
        </BlogWrapper>
      </Layout>
    </ThemeProvider>
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
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
