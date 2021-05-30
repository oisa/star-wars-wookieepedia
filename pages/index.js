import React, { useEffect } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Foo from '../components/Foo/Foo.js';
import FilmSearch from '../components/FilmSearch/FilmSearch';
import ThemeComponent from '../components/Theme/ThemeComponent';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Wookieepedia | Star Wars Film Database</title>
        <meta name="description" content="Wookieepedia | Star Wars Film Database. Explore all the details for all your favourite Star Wars films!" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Wookieepedia | Star Wars Film Database" />
        <meta property="og:description" content="Explore all the details for all your favourite Star Wars films!" />
        <link rel="manifest" href="../public/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:image" content="%PUBLIC_URL%/public/Wookieepedia-Star-Wars-Database-OG-Image.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png" />
        <link rel="mask-icon" href="../public/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>

      <Header />

      <div className={styles.mainContainer}>

        <FilmSearch />

      </div>

      <Footer />

    </div>
  )
}
