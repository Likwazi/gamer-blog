import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { useParams, Link } from 'react-router-dom';

const CATEGORY = gql`
 query GetCategory($id: ID!) {
  category(id: $id) {
    data{
      id,
      attributes{
        name,
        reviews{
          data{
            id,
            attributes{
              title,
              body,
              rating,
              categories{
                data{
                  id,
                  attributes{
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
 }`

export default function Category() {
  const { id } = useParams();
  const { loading, error, data } = useQuery(CATEGORY, { 
    variables: { id: id } 
  });
  if(loading) return (<div>Loading...</div>)
  if(error) return (<div>Error</div>)
  console.log(data)
  return (
    <div>
      <h2>{data.category.data.attributes.name}</h2>
      <div>{data.category.data.reviews?.data[0].attributes.map((review) => (
        <div key={review.id}>
          <Link to={`/review/${review.id}`}>{review.attributes?.title}</Link>
          <div>{review}</div>
          <div>{review.attributes.categories.data.map((category) => 
            <div key={category.id}>{category.attributes.name}</div>
          )}</div>
        </div>
      ))}
         

     </div>
    </div>
  )
}
