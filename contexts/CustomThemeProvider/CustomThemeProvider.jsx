import React, { createContext, useState } from 'react'
import defaultTheme from '../../configs/theme.config'
import { ThemeProvider } from 'styled-components'

export const ThemeContext = createContext({
  theme: {},
  setTheme: () => {},
})

const CustomThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(defaultTheme.dark)

  const handleSetTheme = (theme) => {
    setTheme(theme)
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: theme,
        setTheme: handleSetTheme,
      }}
    >
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default CustomThemeProvider
