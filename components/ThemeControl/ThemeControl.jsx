import React, { useContext, useEffect, useCallback } from 'react'
import styled from 'styled-components'
import themeConfig from '../../configs/theme.config'
import { ThemeContext } from '../../contexts/CustomThemeProvider'

const [DARK, LIGHT] = ['dark', 'light']
const ThemeControl = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const setLightTheme = useCallback(() => {
    setTheme(themeConfig.light)
    localStorage.setItem('currentTheme', LIGHT)
  }, [setTheme])

  const setDarkTheme = useCallback(() => {
    setTheme(themeConfig.dark)
    localStorage.setItem('currentTheme', DARK)
  }, [setTheme])

  useEffect(() => {
    const currentTheme = localStorage.getItem('currentTheme')
    if (currentTheme === LIGHT) {
      setLightTheme()
    } else {
      setDarkTheme()
    }
  }, [setDarkTheme, setLightTheme])

  return (
    <StyledThemeControl>
      {
        theme === themeConfig.light &&
          <StyledIcon onClick={setDarkTheme} color={'#000'}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </StyledIcon>
      }
      {
        theme === themeConfig.dark &&
          <StyledIcon
          onClick={setLightTheme}
          color={'#fff'}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
          </svg>
        </StyledIcon>
      }
      
    </StyledThemeControl>
  )
}

const StyledThemeControl = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  z-index: 2;
`

const StyledIcon = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  display: inline-block;
  vertical-align: middle;
  color: ${props => props.color};

  &:disabled {
    cursor: default;
  }
`

const StyledSpan = styled.span`
  display: inline-block;
  vertical-align: middle;
  color: #ccc;
  margin-left: -5px;
  margin-top: -5px;
`

export default ThemeControl
