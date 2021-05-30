import React, { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

// Components
import StarFieldComponent from '../components/StarFieldComponent'
import Foo from '../components/Foo/Foo.js';
import FilmSearch from '../components/FilmSearch/FilmSearch';
import ThemeComponent from '../components/Theme/ThemeComponent';

// Assets
import StarWarsLogo from '../public/assets/StarWarsLogo';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Wookieepedia | Star Wars Film Database</title>
        <meta name="description" content="Wookieepedia | Star Wars Film Database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <StarFieldComponent />

      <header>
        <a href="/">
          <StarWarsLogo />
          <h1 className="noselect">Wookieepedia</h1>
        </a>

        <ThemeComponent />
      </header>

      <div className={styles.mainContainer}>

        { /*<Foo />*/ }

        <FilmSearch />

      </div>

      { /* <footer>
        <p>Powered by The Force.</p>
      </footer> */}

    </div>
  )
}
