import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ThemeContext = createContext()

function ThemeContextProvider({ children }) {

  // State variables

  const [films, setFilms] = useState()
  const [characters, setCharacters] = useState()
  const [favourites, setFavourites] = useState([])
  const [searchResults, setSearchResults] = useState()

  // SWAPI Requests

  // Films data retrieval

  const getFilms = () => {

    axios('https://swapi.dev/api/films/').then((response) => {
      setFilms(response.data.results);
    });

  }

  const getCharacters = () => {

    axios('https://swapi.dev/api/people/').then((response) => {
      setCharacters(response.data.results);
    });

  }

  const getSearchData = async (page, query) => {

    const res = await fetch(`https://swapi.dev/api/${page}/?search=${query}`);
    const json = await res.json();
    return json

  }

  useEffect(() => {

    getFilms()
    getCharacters()

  }, []);

  // Theme

  const [theme, setTheme] = useState(true);
  const [allegiance, setAllegiance] = useState()

  // Values passed down to children

  const values = {
    setTheme,
    theme,
    characters,
    films,
    setFilms,
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
