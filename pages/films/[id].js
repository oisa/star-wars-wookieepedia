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
  const [selectedFilmCharacters, setSelectedFilmCharacters] = useState();

  const days = [
    'Sun',
    'Mon',
    'Tue',
    'Wed',
    'Thu',
    'Fri',
    'Sat'
  ]

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  const getCharacterData = async (json) => {

    const result = [];

    json.forEach(async (item) => {

      const https = item.replace("http", "https");
      const res = await fetch(https);
      const json = await res.json();
      const write = result.push(json);
      const updateState = await setSelectedFilmCharacters([...result]);

    });

  }

  const getData = async () => {
    const pageNum = await ((window.location.href).split("/").slice(-1)[0]);
    const res = await fetch(`https://swapi.dev/api/films/${ pageNum }`);
    const json = await res.json();
    return setSelectedFilm(json), getCharacterData(json.characters);
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className={ styles.container }>

      <Head>
        <title>{ selectedFilm == null ? 'Loading...' : selectedFilm.title } | Wookieepedia | Star Wars Film Database</title>
        <meta name="description" content="Wookieepedia | Star Wars Film Database" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <div className={ styles.mainContainer }>

        { selectedFilm == null ? <p>Loading...</p> : <h2>{selectedFilm.title}</h2> }

        <div className={ styles.scrollContainer }>
          { selectedFilm == null ? null : <p>{selectedFilm.opening_crawl}</p> }
        </div>

        { selectedFilm == null ? null :
            <div className={ styles.specsInnerContainer }>
              <h3>Film Specs</h3>
              <p><span>Title:</span> { selectedFilm.title }</p>
              <p><span>Episode Number:</span> { selectedFilm.episode_id }</p>
              <p><span>Release Date:</span> {

                `${days[(new Date(selectedFilm.release_date)).getDay()]},

                ${(new Date(selectedFilm.release_date)).getDate()}

                ${months[(new Date(selectedFilm.release_date)).getMonth()]}

                ${(new Date(selectedFilm.release_date)).getFullYear()}`

                }</p>
              <p><span>Director:</span> { selectedFilm.director }</p>
              <p><span>Producer(s):</span> { selectedFilm.producer }</p>
            </div>
          }

            { selectedFilm == null ? null :

              <div className={ styles.charactersContainer }>
                <h3>Characters</h3>
                { selectedFilmCharacters == null ? null : selectedFilmCharacters.map((sr, i) => (

                  <div className={ styles.tooltip } key={ i }>{ sr.name }
                    <span className={ styles.tooltipText } >{ `${ sr.name } | ${ sr.birth_year } | ${ sr.eye_color } | ${ sr.gender } | ${ sr.hair_color }` }</span>
                  </div>

                  ))
                }
              </div>

            }

      </div>

      <Footer />

    </div>
  )
}

export default FilmDetail;
