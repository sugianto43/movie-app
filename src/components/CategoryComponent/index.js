import React, { useState } from 'react'
import './category.css'

const list = ['Latest', 'Now Playing', 'Popular', 'Top Rated', 'Upcoming']
const CategoryComponent = ({ valueSearch, onChangeSearch }) => {
  const [index, setIndex] = useState(0)

  const handleClick = (params) => {
    setIndex(params)
  }
  return (
    <div className='category-container'>
      <h2>Browse by category</h2>
      <div className="list-container">
        <ul>
          {list && list.map((value, idx) => (
            <li
              key={Math.random()}
              className={`${index === idx ? "active" : ""}`}
              onClick={() => handleClick(idx)}
            >
              {value}
            </li>
          ))}
        </ul>
        <input type="text" placeholder='search' value={valueSearch} onChange={onChangeSearch} />
      </div>
    </div>
  )
}

export default CategoryComponent
