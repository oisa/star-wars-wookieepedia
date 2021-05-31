import React, { useState, useEffect, useContext, createContext } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/Id.module.scss'
import axios from 'axios';
import { ThemeContext } from '../../components/context/ThemeContext';

// Components
import ThemeComponent from '../../components/Theme/ThemeComponent'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

// Assets
import StarWarsLogo from '../../public/assets/StarWarsLogo';

const FilmDetail = ({ children, href }) => {

  const [selectedFilm, setSelectedFilm] = useState();
  const [selectedFilmCharacters, setSelectedFilmCharacters] = useState();

  const { films, characters, getSelectedFilm, getMainData } = useContext(ThemeContext)

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

  const getData = async () => {

    const pageNum = await ((window.location.href).split("/").slice(-1)[0]);

    films == undefined ? null :  setSelectedFilm(films[Number(pageNum-1)])

  }

  useEffect(() => {

    getData()

  }, [films, characters])

  return (
    <div className={ styles.container }>

      <Head>
        <title>{ selectedFilm == null ? 'Loading...' : selectedFilm.title } | Wookieepedia | Star Wars Film Database</title>
        <meta name="description" content="Wookieepedia | Star Wars Film Database" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Wookieepedia | Star Wars Film Database" />
        <meta property="og:description" content="Explore all the details for all your favourite Star Wars films!" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:image" content="../public/Wookieepedia-Star-Wars-Database-OG-Image.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="../public/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../public/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../public/favicon-16x16.png" />
        <link rel="mask-icon" href="../public/safari-pinned-tab.svg" color="#5bbad5" />
      </Head>

      <Header />

      <div className={ styles.mainContainer }>

        { selectedFilm == null ? <p>Loading...</p> : <h2>{ selectedFilm.title }</h2> }

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
