import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { GlobalStyles } from './global';

// Styles
import styles from './Theme.module.scss';

const Theme = () => {

  const { allegiance, setAllegiance, theme, setTheme } = useContext(ThemeContext)

  let currentTheme;
  let currentAllegiance;

  if (typeof window !== 'undefined') {

    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light');
      currentTheme = 'light';
      localStorage.setItem('allegiance', 'The Force');
      currentAllegiance = 'The Force';

    } else {

      currentTheme = localStorage.getItem('theme');
      currentAllegiance = localStorage.getItem('allegiance');
      
    }
  }

  setTheme(currentTheme);
  setAllegiance(currentAllegiance);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
      localStorage.setItem('allegiance', 'The Bogan');
    } else {
      setTheme('light');
      localStorage.setItem('theme', 'light');
      localStorage.setItem('allegiance', 'The Force');
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
