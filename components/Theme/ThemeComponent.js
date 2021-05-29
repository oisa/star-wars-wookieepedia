import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

// Styles
import styles from './Theme.module.scss';

const Theme = () => {

  let currentTheme;

  if (typeof window !== 'undefined') {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
      currentTheme = 'light';
    } else {
      currentTheme = localStorage.getItem('theme')
    }
  }

  const [theme, setTheme] = useState(currentTheme);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
    }
  }

  return (
    <ThemeProvider theme={ theme === 'light' ? lightTheme : darkTheme }>
      <div className={styles.theme}>
          <GlobalStyles />
          <p>Allegiance: {theme} side</p>
          <label className={ styles.switch }><input onClick={toggleTheme} type="checkbox" checked={theme === 'dark' ? 'true' : false}/> <div></div>
          </label>
      </div>
    </ThemeProvider>
  )
}

export default Theme;
