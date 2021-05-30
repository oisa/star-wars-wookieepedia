import React, { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'

// Components
import ThemeComponent from '../Theme/ThemeComponent';

// Assets
import StarWarsLogo from '../../public/assets/StarWarsLogo';

const Header = () => {
  return (
    <header>
      <ThemeComponent />

      <a href="/">
        <StarWarsLogo />
        <h1 className="noselect">Wookieepedia</h1>
      </a>
    </header>
  )
}

export default Header;
