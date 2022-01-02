import React, { useEffect, useState } from 'react'
import CategoryComponent from '../../components/CategoryComponent'
import Hero from '../../components/Hero'
import MovieCard from '../../components/MovieCard'
import Loader from '../../components/Loader'
import { useFetch } from '../../helpers/useFetch'
import './home.css'
import { useHistory } from 'react-router'

const Home = () => {
  const history = useHistory();
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState("now_playing");
  // const [start, setStart] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPage,setTotalPage] = useState(1);
  const {response, loading, error} = useFetch({
    category,
    method: "GET",
    page,
    // start
  })

  useEffect(()=>{
    window.scroll(0,0)
  },[])

  const scrollToTop = () => {
    window.scrollTo({ top: 500, behavior: 
      'smooth' 
    })
  }

  const handleClickMovie = (id) => {
    history.push(`/detail/${id}`)
  }

  const handleClickPrev = () => {
    setPage(page - 1)
    scrollToTop()
  }

  const handleClickNext = () => {
    setPage(page + 1)
    scrollToTop()
  }

  useEffect(() => {
    if (response) {
      setMovies(response.results);
      setTotalPage(response.total_pages)
      console.log("response", response);
    }
  }, [response])

  useEffect(() => {
    if(error) {
      console.log('error fetch', error)
    }
  }, [error])

  return (
    <div>
      <Hero />
      <div style={{
        padding: "25px 150px"
      }}>
        <CategoryComponent 
          setCategory={setCategory}
          setPage={setPage} 
          valueSearch={search}
          onChangeSearch={(e) => setSearch(e.target.value)}
        />
        {loading ? (
          <Loader />
        ) :(
          <div id='scroller' style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "repeat(5, 1fr)",
          gridAutoRows: "minmax(100px, auto)",
          gridColumnGap: 10,
          gridRowGap: 45,
          marginTop: 67,
        }}>
          {movies && movies.filter((val) => {
              if (setSearch === '') {
                return val;
              } if (
                val.title
                  .toLowerCase()
                  .includes(search.toLowerCase())
              ) {
                return val;
              }
            }).map((movie) => (
            <MovieCard 
              key={movie.id}
              imagePath={movie.poster_path}
              title={movie.title}
              onClick={()=>handleClickMovie(movie.id)}
            />
          ))}
        </div>)}
        <div className='pagination'>
          <div style={{width: "33%"}}>
            {page !== 1 && <p className='prev' onClick={handleClickPrev}>Prev. Page </p>}
          </div>

          {/* <div className='center'> */}
            <p className='center'>Page {page} of {totalPage}</p>
          {/* </div> */}

          <div style={{width: "33%"}}>
            {page !== totalPage && <p className="next" onClick={handleClickNext}>Next Page</p>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
