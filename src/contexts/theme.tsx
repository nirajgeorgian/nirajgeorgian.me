import React, { createContext } from 'react'
import useDarkMode from 'contexts/hooks/useTheme'

interface IThemeContext {
  theme: string
  toggleTheme: () => void
}
export const ThemeContext = createContext<Partial<IThemeContext>>({
  theme: 'light'
})

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, toggleTheme] = useDarkMode()

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
