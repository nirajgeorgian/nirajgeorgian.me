import Typography from 'typography'
import AltonTheme from 'typography-theme-alton'

AltonTheme.baseFontSize = '14px'
AltonTheme.baseLineHeight = 1.45
AltonTheme.overrideThemeStyles = () => {
  return {
    'a.gatsby-resp-image-link': {
      boxShadow: 'none'
    }
  }
}

const typography = new Typography(AltonTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export const { scale, rhythm, options } = typography
export default typography
