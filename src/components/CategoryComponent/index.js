import React, { useState } from 'react'
import './category.css'

const list = [
  {
    label: 'Now Playing',
    category: 'now_playing'
  }, 
  {
    label:'Popular',
    category: 'popular'
  }, 
  {
    label: 'Top Rated',
    category: 'top_rated'
  }, 
  {
    label: 'Upcoming',
    category: 'upcoming'
  }]
const CategoryComponent = ({ valueSearch, onChangeSearch, setCategory, setPage }) => {
  const [index, setIndex] = useState(0)

  const handleClick = (params, categ) => {
    setIndex(params)
    setCategory && setCategory(categ)
    setPage && setPage(1)
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
              onClick={() => handleClick(idx, value.category)}
            >
              {value.label}
            </li>
          ))}
        </ul>
        <input type="text" placeholder='search' value={valueSearch} onChange={onChangeSearch} />
      </div>
    </div>
  )
}

export default CategoryComponent
