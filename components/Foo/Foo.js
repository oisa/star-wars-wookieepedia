import React, { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import styles from './Foo.module.scss';

const Foo = () => {

  const { theme, setTheme, setSearchResults, searchResults, getSearchData } = useContext(ThemeContext)

  const asinky = async (people, value) => {
    const { results } = await getSearchData(people, value)
    setSearchResults(results)
  }

  useEffect(() => {
    console.log(searchResults)
  }, [searchResults])

  return (
    <div className={ styles.aron }>
      <input type="text" onChange={ (e) => setSearchResults(asinky('people', e.target.value)) } />
      <ul>
        { searchResults?.map((sr, i) => (
        <li key={i}>{sr.name}</li> )) }
      </ul>
      <button onClick={ () => setTheme(!theme) }>Butt on</button>
      <p>Lauren Ipsum.</p>
    </div>
  )
}

export default Foo;
