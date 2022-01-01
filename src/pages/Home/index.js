import React from 'react'
import CategoryComponent from '../../components/CategoryComponent'
import Hero from '../../components/Hero'
import MovieCard from '../../components/MovieCard'

const Home = () => {
  return (
    <div>
      <Hero />
      <div style={{
        padding: "25px 150px"
      }}>
        <CategoryComponent />
        <div style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridAutoRows: "minmax(100px, auto)",
          gridColumnGap: 10,
          gridRowGap: 45,
          marginTop: 67,
        }}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6,].map(() => (
            <MovieCard />
          ))}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 65
          }}
        >
          <div style={{
            border: "1px solid #EB507F",
            boxSizing: "border-box",
            borderRadius: 50,
            padding: "10px 15px",
            background: "#EB507F",
            marginRight: 10,
            fontStyle: "normal",
            fontWeight: 900,
            fontSize: 18,
            color: "#FFFFFF"
          }}>
            Load More
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
