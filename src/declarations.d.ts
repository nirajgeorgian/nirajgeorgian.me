declare const graphql: (query: TemplateStringsArray) => void

declare module '*.svg' {
  const content: string

  export default content
}

declare module 'typography-theme-alton' {
  import { TypographyOptions } from 'typography'
  const Theme: TypographyOptions

  export = Theme;
}
