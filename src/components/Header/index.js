import React from 'react'
import Logo from '../../assets/logo/brand-logo.jpg'
import './header.css'

const Headers = () => {
  return (
    <header>
      <img src={Logo} alt="Logo" className='header-logo' />
      <h2>MovieApp</h2>
    </header>
  )
}

export default Headers
