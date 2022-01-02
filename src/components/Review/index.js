import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../../helpers/useFetch'
import Loader from '../Loader'
import './review.css'
import defaultPic from '../../assets/images/default-image.png'

const Review = () => {
  const isReview = true
  const params = useParams()
  const [comments, setComments] = useState([])
  const [image, setImage] = useState([])
  const { response, loading } = useFetch({
    isReview,
    movieId: params.id
  })

  useEffect(() => {
    if (response) {
      setComments(response.results)
      response.results.map(item => setImage([item.author_details.avatar_path]))
    }
  }, [response])

  if (loading) {
    return (
      <Loader />
    )
  }

  console.log("image",image)

  console.log("review", response)
  return (
    <div>
      {comments.length > 0 ? comments.map(comment => (
        <div className='review-list' key={Math.random()}>
          <img src={String(comment.author_details.avatar_path).substring(1) || defaultPic} alt="avatar" />
          <div className="comment">
            <h2>{comment.author ? comment.author : "Anonymous" }</h2>
            <p>{comment.content}</p>
          </div>
        </div>)) : (
          <div>
            <h2>No Review</h2>
          </div>
        )}
    </div>
  )
}

export default Review
