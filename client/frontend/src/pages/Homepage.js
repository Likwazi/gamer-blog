import React from 'react';
import useFetch from '../components/hooks/useFetch';
import { Link } from 'react-router-dom';

export default function Homepage() {
  const { data, loading, error } = useFetch("http://localhost:1337/api/reviews")
  if(loading) return (<p>Loading...</p>)
  if(error) return (<p>error</p>)

  return (
    <div>{data.data.map(review => (
      <div className="bg-white mx-auto my-16 p-1 md:p-5 md:pl-24 md:pr-5 relative" key={review.id}>
         <div className="absolute -top-5 -left-5 bg-purple-600 text-white text-5xl pt-5 w-24 h-24 text-center">{review.attributes.rating}</div>
         <h2 className='font-medium mb-0'>{review.attributes.title}</h2>
 
         <small className="text-gray-700 mr-2.5">console list</small>
 
         <p>{review.attributes.body.children?.text}</p>
         
         <Link className="text-purple-600 underline" to={`/details/${review.id}`}>Read more...</Link>
       </div>
     ))}</div>
  )
}
