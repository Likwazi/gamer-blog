import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

const REVIEWS = gql`
query GetReviews{
  reviews{
    data{
      id
      attributes{
        title
        rating
        body
      }
    }
  }
}`

export default function Homepage() {

  const { data, loading, error } = useQuery(REVIEWS);
  if(loading) return (<p>Loading...</p>)
  if(error) return (<p>error</p>)
  //console.log(data)
  

  return (
    <div>{data.reviews.data.map((review) => {
      return <div className="bg-white mx-auto my-16 p-1 md:p-5 md:pl-24 md:pr-5 relative" key={review.id}>
         <div className="absolute -top-5 -left-5 bg-purple-600 text-white text-5xl pt-5 w-24 h-24 text-center">{review.attributes.rating}</div>
         <h2 className='font-medium mb-0'>{review.attributes.title}</h2>
 
         <small className="text-gray-700 mr-2.5">console list</small>
 
         <div>{review.attributes.body.map((blog) => {
          return <p >{blog?.children?.text}</p>
         })}</div>
         
         <Link className="text-purple-600 underline" to={`/details/${review.id}`}>Read more...</Link>
       </div>
    }
     )}</div>
  )
}
