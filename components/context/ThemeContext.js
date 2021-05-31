import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ThemeContext = createContext()

function ThemeContextProvider({ children }) {

  ///////////////////////////////////////////////////////////
  // State variables ///////////////////////////////////////
  ///////////////////////////////////////////////////////////

  const [films, setFilms] = useState()
  const [filmsList, setFilmsList] = useState()
  const [characters, setCharacters] = useState()
  const [favourites, setFavourites] = useState([])
  const [searchResults, setSearchResults] = useState()

  // Theme

  const [theme, setTheme] = useState(true);
  const [allegiance, setAllegiance] = useState()

  ///////////////////////////////////////////////////////////
  // SWAPI Requests /////////////////////////////////////////
  ///////////////////////////////////////////////////////////

  // Films data retrieval

  const getData = async (requests) => {

    if (typeof window !== 'undefined') {

      // Films List (Home page list)
      if (localStorage.getItem('filmsList') === null) {
        getFilmsList()
      } else {
        setFilmsList(JSON.parse(localStorage.getItem('filmsList')));
      }

      // Favourites
      if (localStorage.getItem('favourites') === null) {
        localStorage.setItem('favourites', JSON.stringify(favourites));
      } else {
        setFavourites(JSON.parse(localStorage.getItem('favourites')));
      }

      // Films
      if (localStorage.getItem('films') === null) {
        getFilms()
      } else {
        setFilms(JSON.parse(localStorage.getItem('films')));
      }

      // Characters
      if (localStorage.getItem('characters') === null) {
        getCharacters()
      } else {
        setCharacters(JSON.parse(localStorage.getItem('characters')));
      }

    }

  }

  const getFilmsList = () => {

    axios('https://swapi.dev/api/films/').then((response) => {

      setFilmsList(response.data.results);

      localStorage.setItem('filmsList', JSON.stringify(response.data.results));

    })

  }

  const getFilms = () => {

    axios('https://swapi.dev/api/films/').then((response) => {

      setFilms(response.data.results);

      localStorage.setItem('films', JSON.stringify(response.data.results));

    })

  }

  const getCharacters = () => {

    let results = [];

    for (let i = 1; i <= 9; i++) {

      axios(`https://swapi.dev/api/people/?page=${ i  }`).then((response) => {
        results.push(response.data.results);
      });

    }

    return setCharacters(results);

  }

  const getSearchData = async (page, query) => {

    const res = await fetch(`https://swapi.dev/api/${page}/?search=${query}`);
    const json = await res.json();
    return json

  }

  useEffect(() => {

    getData()

  }, []);

  // Values passed down to children

  const values = {
    films,
    setFilms,
    filmsList,
    setFilmsList,
    setTheme,
    theme,
    characters,
    getSearchData,
    setSearchResults,
    searchResults,
    setFavourites,
    favourites,
    allegiance,
    setAllegiance
  };

  return (
    <ThemeContext.Provider value={ values }>
      { children }
    </ThemeContext.Provider>
  )

}

export default ThemeContextProvider;
