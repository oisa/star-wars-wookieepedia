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

// export const getStaticPaths = async () => {
//   const res = await fetch('https://swapi.dev/api/films/');
//   const data = await res.json();
//
//   const paths = data.map(films => {
//     return {
//       params: { id: films.episode_id.toString() }
//     }
//   })
//
//   return {
//     paths,
//     fallback: false
//   }
// }
//
// export const getStaticProps = async (context) => {
//   const id = context.params.id;
//   const res = await fetch('https://swapi.dev/api/films/' + id);
//   const data = await res.json();
//
//   return {
//     props: { film: data }
//   }
// }

const FilmDetail = ({ children, href }) => {

  const [selectedFilm, setSelectedFilm] = useState();

  useEffect(() => {
    setSelectedFilm((window.location.href).split("/").slice(-1)[0]);
  }, [])

  const getFilms = () => {
    axios('https://swapi.dev/api/films/').then((response) => {
      setFilms(response.data.results);
    });
  }

  return (
    <div className={ styles.container }>
      <Header />

      <div className={styles.mainContainer}>

      </div>

      <Footer />
    </div>
  )
}

export default FilmDetail;
