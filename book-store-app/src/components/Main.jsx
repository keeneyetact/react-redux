import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Books from './Books'
import Input from './Input'
import { featuredBooks, allBooks } from '../redux/filters/actions'

const Main = () => {
  const dispatch = useDispatch()
  const { isFeatured } = useSelector(state => state.filters)
  console.log(isFeatured)

  const handleAll = (e) => {
    e.preventDefault()
    dispatch(allBooks())
  }
  const handleFeatured = (e) => {
    e.preventDefault()
    dispatch(featuredBooks())
  }

  return (
    <div className="py-12 2xl:px-6">
    <div className="container grid xl:grid-cols-[auto_350px] 2xl:grid-cols-[auto_400px] gap-4 2xl:gap-8">
      <div className="order-2 xl:-order-1">
        <div className="flex items-center justify-between mb-12">
          <h4 className="mt-2 text-xl font-bold">Book List</h4>

          <div className="flex items-center space-x-4">
            <button onClick={handleAll} className={`filter-btn ${!isFeatured && 'active-filter'}`} id="lws-filterAll">All</button>
            <button onClick={handleFeatured} className={`filter-btn ${isFeatured && 'active-filter'}`} id="lws-filterFeatured">Featured</button>
          </div>
        </div>
          {/* <!-- Card 1 --> */}
            <Books />
      </div>
      <div>
        <Input />
      </div>
    </div>
  </div>
  )
}

export default Main