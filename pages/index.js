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
        <meta name="description" content="Wookieepedia | Star Wars Film Database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={styles.mainContainer}>

        <FilmSearch />

      </div>

      <Footer />

    </div>
  )
}
