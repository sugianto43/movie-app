import React from 'react'
import './overview.css'

const Overview = ({overview, popularity, release_date, revenue, budget, runtime, status, vote_average}) => {

  const formatNumber = (numb) => {
    const options = {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }

    return Number(numb).toLocaleString("id-ID", options)
  }
   
  const listInfo = [
    {
      id: 1,
      label: "Release date ",
      value: release_date
    },
    {
      id: 2,
      label: "Popularity ",
      value: popularity
    },
    {
      id: 3,
      label: "Total Revenue ",
      value: `${formatNumber(revenue)} USD`
    },
    {
      id: 4,
      label: "Total Budget   ",
      value: `${formatNumber(budget)} USD`
    },
    {
      id: 5,
      label: "Runtime ",
      value: `${runtime} minutes`
    },
    {
      id: 6,
      label: "Status ",
      value: status
    },
    {
      id: 7,
      label: "Rating ",
      value: vote_average
    },
  ]
  return (
    <div>
      <div className="synopsis">
        <h2>Synopsis</h2>
        <hr />
      </div>
      <p className='synopsis-text'>{overview}</p>

      <div className="synopsis">
        <h2 style={{width: 190, paddingRight: 0}}>Movie Info</h2>
        <hr />
      </div>
      <div className="info-container">
        {listInfo.map((item)=>(
        <p key={item.id}>{item.label}<span>{`: ${item.value}`}</span></p>
        ))}
      </div>
    </div>
  )
}

export default Overview
