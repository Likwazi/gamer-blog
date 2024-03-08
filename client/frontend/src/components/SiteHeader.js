import React from 'react'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'

const CATEGORIES = gql`
 query GetCategory {
  categories {
    data{
      id
      attributes{
        name
      }
    }
  }
 }`

export default function SiteHeader() {
  const { loading, error, data } = useQuery(CATEGORIES);
  if (loading) return <p>Loading categories...</p>;
  if (error) return <p>Error</p>;
  //console.log(data);

  return (
    <div>
        <Link className="text-purple-600 underline"to="/"><h1 className="text-2xl font-semibold text-purple-600 pb-2.5 border-b-2 border-purple-600">Likwazi's Reviews</h1></Link>
        <nav className='text-right'>
          <span>  Filter review by category:</span>
          {data.categories.data.map(category => (
            <Link key={category.id} className="text-purple-600 underline ml-10"to={`/category/${category.id}`}><span className="text-purple-600 underline">{category.attributes.name}</span></Link>
          ))}
          {/*<Link className="text-purple-600 underline"to="/add-review"><span className="text-purple-600 underline">Add Review</span></Link>
          <Link className="text-purple-600 underline"to="/add-category"><span className="text-purple-600 underline">Add Category</span></Link>
          <Link className="text-purple-600 underline"to="/login"><span className="text-purple-600 underline">Login</span></Link>
          <Link className="text-purple-600 underline"to="/register"><span className="text-purple-600 underline">Register</span></Link>
          <Link className="text-purple-600 underline"to="/logout"><span className="text-purple-600 underline">Logout</span></Link>
          <Link className="text-purple-600 underline"to="/profile"><span className="text-purple-600 underline">Profile</span></Link>
          */}
        </nav>
    </div>
  )
}
 