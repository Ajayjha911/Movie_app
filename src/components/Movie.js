/** @format */

import React from 'react'
const IMGPATH = 'https://image.tmdb.org/t/p/w1280'

const setVoteclass = (vote) => {
  if (vote >= 8) {
    return 'green'
  } else if (vote >= 6) {
    return 'orange'
  } else {
    return 'red'
  }
}

const Movie = ({ title, poster_path, overview, vote_average }) => {
  return (
    <div className='movie'>
      <img
        src={
          poster_path
            ? IMGPATH + poster_path
            : 'https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1vdmllfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
        }
        alt='{title}'
      />
      <div className='movie-info'>
        <h3>{title}</h3>
        <span className={`tag ${setVoteclass(vote_average)}`}>
          {vote_average}
        </span>
      </div>
      <div className='movie-overview'>
        <h2>Overview:</h2>
        <p>{overview}</p>
      </div>
    </div>
  )
}
export default Movie
