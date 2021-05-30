import React, { useState, useEffect, useContext, createContext } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Id.module.scss'
import axios from 'axios';

// Components
import ThemeComponent from '../../components/Theme/ThemeComponent';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';

// Assets
import StarWarsLogo from '../../public/assets/StarWarsLogo';

const FilmDetail = ({ children, href }) => {

  const [selectedFilm, setSelectedFilm] = useState();

  const getData = async () => {
    const pageNum = await ((window.location.href).split("/").slice(-1)[0]);
    const res = await fetch(`https://swapi.dev/api/films/${ pageNum }`);
    const json = await res.json();
    return setSelectedFilm(json);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={ styles.container }>
      <Header />

      <div className={ styles.mainContainer }>

        { selectedFilm == null ? <p>Loading...</p> : <h2>{selectedFilm.title}</h2> }

        <div className={ styles.scrollContainer }>
          { selectedFilm == null ? null : <p>{selectedFilm.opening_crawl}</p> }
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default FilmDetail;
