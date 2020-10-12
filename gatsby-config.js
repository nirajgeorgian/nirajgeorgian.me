module.exports = {
  siteMetadata: {
    title: 'Niraj Georgian',
    description: 'Full Stack Developers',
    author: {
      name: 'Niraj Georgian',
      summary: 'who lives and works in Bangalore building useful things.'
    },
    social: {
      twitter: 'nirajgeorgian',
      instagram: 'nirajgeorgian'
    }
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/content/blog/`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              backgroundColor: '#fafafa',
              maxWidth: 1035
            }
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem'
            }
          },
          {
            resolve: 'gatsby-remark-vscode',
            options: {
              theme: 'Default Dark+',
              inlineCode: {
                marker: '•',
                theme: {
                  default: 'Default Light+',
                  dark: 'Default Dark+'
                }
              }
            }
          },
          'gatsby-remark-autolink-headers',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography'
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-180316829-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true
      }
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: 'white',
        // Disable the loading spinner.
        showSpinner: false
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-styled-components'
  ]
}
