import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './FilmSearch.module.scss';

// Assets

import IconStar from '../../public/assets/StarIcon'
import IconStarSelected from '../../public/assets/StarIconSelected'

const FilmSearch = () => {

  const { films, setFilms, filmsList, setFilmsList, favourites, setFavourites } = useContext(ThemeContext)

  // Sort Method

  const [sortMethod, setSortMethod] = useState('Release Date')

  // Favourites Management

  // Add to Favourites

  const addToFavourites = (i) => {

    let favourite = filmsList[i];

    // Updates Favourites list
    setFavourites([...favourites, favourite].sort(function(a, b) {
      return Date.parse(a.release_date) - Date.parse(b.release_date);
    }));

    // Updates Films list
    setFilmsList((filmsList.filter(item => item.episode_id !== favourite.episode_id)).sort(function(a, b) {
      return Date.parse(a.release_date) - Date.parse(b.release_date);
    }));

    localStorage.setItem('favourites', JSON.stringify(favourites));
    localStorage.setItem('films', JSON.stringify(filmsList));

  }

  // Remove from Favourites

  const removeFromFavourites = (i) => {

    let favourite = favourites[i];

    // Updates Films list
    setFilmsList([...filmsList, favourite].sort(function(a, b) {
      return Date.parse(a.release_date) - Date.parse(b.release_date);
    }));

    // Updates Favourites list
    setFavourites((favourites.filter(item => item.episode_id !== favourite.episode_id)).sort(function(a, b) {
      return Date.parse(a.release_date) - Date.parse(b.release_date);
    }));

    localStorage.setItem('favourites', JSON.stringify(favourites));
    localStorage.setItem('films', JSON.stringify(filmsList));

  }

  return (
    <>
      <h2 className="noselect">Films</h2>

        <div className={styles.searchContainer}>
          Search:
          <input type="text" placeholder="Episode 1"></input>
          <button>Go!</button>
        </div>

        <div className={styles.sortMethod}>Sorting by: {sortMethod}</div>

      <div className={styles.filmsContainer}>

        <ul>
          { favourites == null ? null : favourites.map((sr, i) => (
          <li key={i}>
            <a href={ `films/${sr.url.replace("http://swapi.dev/api/films/", "")}` }>
            Episode {sr.episode_id}: {sr.title}</a><span onClick={() => { removeFromFavourites(i)}}><IconStarSelected /></span>
          </li> )) }
        </ul>

        <ul>
          { filmsList == null ? <li><p>Loading...</p></li> : filmsList.map((sr, i) => (
          <li key={i}>
            <a href={ `films/${sr.url.replace("http://swapi.dev/api/films/", "")}` }>
            Episode {sr.episode_id}: {sr.title}</a><span onClick={() => { addToFavourites(i)}}><IconStar  /></span>
          </li> )) }
        </ul>

      </div>
    </>
  )
}

export default FilmSearch;
