import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Books from '../components/Books'
import { featuredBy } from '../features/filter/filterSlice'

const Home = () => {
  const dispatch = useDispatch()
  const { isFeatured } = useSelector(state => state.filter.filter)
  return (
    <div className="py-12 px-6 2xl:px-6 container" >
        <div className="order-2 xl:-order-1">
      <div className="flex items-center justify-between mb-12">
        <h4 className="mt-2 text-xl font-bold">Book List</h4>

        <div className="flex items-center space-x-4">
          <button onClick={() => dispatch(featuredBy(false))} className={`lws-filter-btn ${!isFeatured ? 'active-filter' : '' }`}>All</button>
          <button onClick={() => dispatch(featuredBy(true))} className={`lws-filter-btn ${isFeatured ? 'active-filter' : '' }`} >Featured</button>
        </div>
      </div>
      <Books />
    </div>
    </div>
  )
}

export default Home