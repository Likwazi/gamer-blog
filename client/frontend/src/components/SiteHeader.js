import React from 'react'
import { Link } from 'react-router-dom'

export default function SiteHeader() {
  return (
    <div>
        <Link className="text-purple-600 underline"to="/"><h1 className="text-2xl font-semibold text-purple-600 pb-2.5 border-b-2 border-purple-600">Likwazi's Reviews</h1></Link>
    </div>
  )
}
