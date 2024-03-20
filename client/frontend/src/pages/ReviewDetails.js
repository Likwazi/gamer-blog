import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery, gql}  from '@apollo/client';

const REVIEW = gql`
query GetReview($id: ID!){
  review(id: $id){
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
//useFetch(`http://localhost:1337/api/reviews/${id}`);

export default function ReviewDetails() {
  const {id} = useParams();
  const {data, loading, error} = useQuery(REVIEW, {
    variables: { id: id}
  });
  if(loading) return <div>Loading...</div>
  if(error) return <div>Error: {error}</div>
  //console.log(data);
  return (
    <div>
       <div className="bg-white mx-auto my-16 p-1 md:p-5 md:pl-24 md:pr-5 relative">
         <div className="absolute -top-5 -left-5 bg-purple-600 text-white text-5xl pt-5 w-24 h-24 text-center">{data.review.data.attributes?.rating}</div>
         <h2 className='font-medium mb-0'>{data.review.data.attributes?.title}</h2>
 
         <small className="text-gray-700 mr-2.5">console list</small>
 
         <p>{data.review.data.attributes?.body?.children?.text}</p>
       </div>
    </div>
  )
}
