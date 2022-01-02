import React from 'react'
import { useHistory } from 'react-router-dom'
import Logo from '../../assets/logo/brand-logo.jpg'
import './header.css'

const Headers = () => {
  const history = useHistory();
  const handleClick = () => history.push('/')
  return (
    <header>
      <div onClick={handleClick}>
        <img src={Logo} alt="Logo" className='header-logo' />
        <h2 >MovieApp</h2>
      </div>
    </header>
  )
}

export default Headers
