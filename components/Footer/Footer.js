import React, { useContext, useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import { ThemeContext } from '../context/ThemeContext';

// Components
import ThemeComponent from '../Theme/ThemeComponent';

const Footer = () => {

  const { allegiance } = useContext(ThemeContext)

  return (
    <footer>
      <p>Powered by { allegiance }.</p>
    </footer>
  )
}

export default Footer;
