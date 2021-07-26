/** @format */
import React, { useEffect, useState } from 'react'
import Movie from './components/Movie'
const APIURL =
  'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1'

const SEARCHAPI =
  'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query='

function App() {
  const [movies, setMovies] = useState([])
  const [searchItem, setsearchItem] = useState('')

  useEffect(() => {
    getMovies(APIURL)
  }, [])

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (searchItem) {
      getMovies(SEARCHAPI + searchItem)
      setsearchItem('')
    }
  }

  const handleOnChange = (e) => {
    setsearchItem(e.target.value)
  }

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type='search'
            className='search'
            placeholder='Search'
            value={searchItem}
            onChange={handleOnChange}
          />
        </form>
      </header>
      <div className='movie-container'>
        {movies.length > 0 &&
          movies.map((movie) => {
            return <Movie key={movie.id} {...movie} />
          })}
      </div>
    </>
  )
}

export default App
