import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './FilmSearch.module.scss';

// Assets

import IconStar from '../../public/assets/StarIcon'
import IconStarSelected from '../../public/assets/StarIconSelected'

const FilmSearch = () => {

  const { films, setFilms, filmsList, setFilmsList, favourites, setFavourites } = useContext(ThemeContext)

  // Sort Method

  return (
    <>
      <h2 className="noselect">Search</h2>

        <div className={styles.searchContainer}>
          Search:
          <input type="text" placeholder="Episode 1"></input>
          <button>Go!</button>
        </div>



    </>
  )
}

export default FilmSearch;
