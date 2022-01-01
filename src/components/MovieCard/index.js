import React from 'react'
import Pic from '../../assets/images/saintseiya.png'
import './movie.css'

const MovieCard = () => {
  return (
    <div className="container">
      <div className='card-container'>
        <img src={Pic} alt="pic" />
      </div>
      <p className='title'>Saint Seiya</p>
      <p className='sub-title'>Anime</p>
    </div>
  )
}

export default MovieCard
