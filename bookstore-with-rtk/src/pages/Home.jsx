import React from 'react'
import Books from '../components/Books'

const Home = () => {
  return (
    <div className="py-12 px-6 2xl:px-6 container" >
        <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button className="lws-filter-btn active-filter">All</button>
          <button className="lws-filter-btn">Featured</button>
        </div>
      </div>
      <Books />
    </div>
    </div>
  )
}

export default Home