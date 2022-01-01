import React from 'react'
import defaultImage from '../../assets/images/default-image.png'
import './movie.css'

const MovieCard = ({imagePath, title, onClick}) => {
  return (
    <div className="container" onClick={onClick}>
      <div className='card-container'>
        <img src={imagePath ? `https://image.tmdb.org/t/p/w500/${imagePath}` : defaultImage} alt={title} />
      </div>
      <p className='title'>{title}</p>
    </div>
  )
}

export default MovieCard
