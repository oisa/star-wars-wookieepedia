import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './FilmSearch.module.scss';

// Assets

import IconStar from '../../public/assets/StarIcon'

const FilmSearch = () => {

  const { films, getData } = useContext(ThemeContext)

  return (
    <>
      <h2 className="noselect">Films</h2>

        <div className={styles.searchContainer}>
          Search:
          <input type="text" placeholder="Episode 1"></input>
          <button>Go!</button>
        </div>

      <div className={styles.filmsContainer}>
        <ul>
          { films == null ? <li>Loading...</li> : films.map((sr, i) => (
          <li key={i}>
            <a href={ sr.url }>
            {sr.title}</a><span><IconStar /></span>
          </li> )) }
        </ul>
      </div>
    </>
  )
}

export default FilmSearch;
