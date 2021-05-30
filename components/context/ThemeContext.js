import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ThemeContext = createContext()

function ThemeContextProvider({ children }) {

  // SWAPI Requests

  const [people, setPeople] = useState()
  const [films, setFilms] = useState()
  const [favourites, setFavourites] = useState([])
  const [allegiance, setAllegiance] = useState()
  const [searchResults, setSearchResults] = useState()

  const getData = async (query) => {
    const res = await fetch(`https://swapi.dev/api/${query}`);
    const data = await res.json();
    return data
  }

  const getFilms = () => {
    axios('https://swapi.dev/api/films/').then((response) => {
      setFilms(response.data.results);
    });
  }

  const getSearchData = async (page, query) => {
    const res = await fetch(`https://swapi.dev/api/${page}/?search=${query}`);
    const json = await res.json();
    return json
  }

  useEffect(() => {
    setPeople(getData('people'))
    getFilms()
  }, []);

  // Theme

  const [theme, setTheme] = useState(true);

  // Values passed down to children

  const values = { setTheme, theme, people, films, setFilms, getSearchData, setSearchResults, searchResults, getData, setFavourites, favourites };

  return (
    <ThemeContext.Provider value={ values }>
      { children }
    </ThemeContext.Provider>
  )

}

export default ThemeContextProvider;
