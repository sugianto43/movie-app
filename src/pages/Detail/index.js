import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Hero from '../../components/Hero'
import Loader from '../../components/Loader'
import Overview from '../../components/Overview'
import PillButton from '../../components/PillButton'
import Review from '../../components/Review'
import { useFetch } from '../../helpers/useFetch'

function Detail() {
  const detail = true
  const [details, setDetails] = useState({})
  const [indexContent, setIndexContent] = useState(0);
  const params = useParams()
  const { response, loading } = useFetch({
    detail,
    movieId: params.id
  })

  useEffect(() => {
    if (response) {
      setDetails(response)
    }
  }, [response])

  useEffect(()=>{
    window.scroll(0,0)
  },[])

  console.log(details)

  if (loading) {
    return (
      <Loader />
    )
  }

  return (
    <div>
      <Hero
        isDetail
        image={details.backdrop_path}
        title={details.title}
        tagline={details.tagline}
      />
      <PillButton setIndexContent={setIndexContent} />
      <section
        style={{
          margin: "0 160px 50px 160px"
        }}
      >
        {indexContent === 0 &&
          <Overview
            overview={details.overview}
            popularity={details.popularity}
            release_date={details.release_date}
            revenue={details.revenue}
            budget={details.budget}
            runtime={details.runtime}
            status={details.status}
            vote_average={details.vote_average}
          />}

          {indexContent === 1 && 
          <Review 
            
          />}
      </section>
    </div>
  )
}

export default Detail
