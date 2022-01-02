import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../helpers/useFetch'
import Loader from '../Loader'
import './character.css'
import defaultPic from '../../assets/images/default-image.png'

const Character = () => {
  const isCharacter = true
  const params = useParams()
  const [characters, setCharacters] = useState([]);
  const { response, loading } = useFetch({
    isCharacter,
    movieId: params.id
  })

  useEffect(() => {
    if (response) {
      console.log("character", response)
      setCharacters(response.cast)
    }
  }, [response])

  if (loading) {
    return (
      <Loader />
    )
  }
  return (
    <div className='character-container'>
      {characters.map(character => (
        <div key={character.id} className="character-list">
          <img src={character.profile_path ? `https://image.tmdb.org/t/p/w500/${character.profile_path}`: defaultPic} alt={character.name} />
          <h2>{character.name}</h2>
          <p>as</p>
          <p>{character.character}</p>
        </div>))}
    </div>
  )
}

export default Character
