import React, { useState } from 'react'
import './pillbutton.css'

const list = [
  {
    label: 'Overview',
    category: 'Overview'
  }, 
  {
    label: 'Review',
    category: 'Review'
  },
  {
    label:'Characters',
    category: 'Characters'
  }, 
]

const PillButton = ({setIndexContent}) => {
  const [index, setIndex] = useState(0)

  const handleClick = (idx) => {
    setIndex(idx)
    setIndexContent && setIndexContent(idx)
  }
  return (
    <div className="btn-container" style={{margin: "20px 151px 60px 151px"}}>
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
    </div>
  )
}

export default PillButton
