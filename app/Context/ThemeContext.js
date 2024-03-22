"use client"

import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = (props) => {

    const [isDarkMode, setIsDarkMode] = useState(true)
    
    const toggleTheme = () => { setIsDarkMode((prev) => !prev) }

    const theme = isDarkMode ? 'dark' : 'light'

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme)
    }, [isDarkMode])
    

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider