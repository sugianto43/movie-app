import React from 'react'
import './hero.css'

const Hero = ({image, title, tagline, isDetail}) => {
  return (
    <div className='hero-container'>
      <div className='hero-image' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://image.tmdb.org/t/p/original${image || "/1Rr5SrvHxMXHu5RjKpaMba8VTzi.jpg"})`
      }}>
        <div className="hero-text">
          {isDetail && <div>
            <h2>{title}</h2>
            <p>{tagline || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum"}</p>
          </div>}
        </div>
      </div>
    </div>
  )
}

export default Hero
