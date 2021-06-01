import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import styles from './FilmSearch.module.scss';
import axios from 'axios';

// Assets

const FilmSearch = () => {

  const { searchResults, setSearchResults, characters, searchValue, setSearchValue } = useContext(ThemeContext)

  const handleChange = (e) => {

    setSearchValue(e.target.value);

  }

  const getResults = () => {

    if (searchValue == " ") {

      setSearchResults(characters.flat())

    } else {

    setSearchResults((characters.flat().filter(item => item.name.includes(searchValue))));

    }

  }

  return (
    <>
      <h2 className="noselect">Character Search</h2>

        <div className={ styles.searchContainer }>
          Search:
          <input type="text" placeholder="Episode 1" onChange={ (e) => { handleChange(e) } }></input>
          <button onClick={ () => { getResults() } }>Go!</button>
        </div>

        <div className={ styles.searchResultsContainer }>
          <ul>
            { searchResults == null ? null : searchResults.map((sr, i) => (
            <li key={i}>

              <div className={ styles.tooltip } key={ i }>{ sr.name }
                <span className={ styles.tooltipText } >{ `${ sr.birth_year } | ${ sr.eye_color } | ${ sr.gender } | ${ sr.hair_color }` }</span>
              </div>

            </li> )) }
          </ul>
        </div>

    </>
  )
}

export default FilmSearch;
