import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Navbar from './Navbar'
import Books from './Books'
import Input from './Input'
import { featuredBooks, allBooks } from '../redux/filters/actions'
import fetchBooks from '../redux/books/thunk/fetchBooks'

const Main = () => {
  const dispatch = useDispatch()
  const { isFeatured } = useSelector(state => state.filters)
  const [currentBookId, setCurrentBookId] = useState(null)
  const [query, setQuery] = useState('')
  console.log(isFeatured)

  const handleAll = (e) => {
    e.preventDefault()
    dispatch(allBooks())
  }
  const handleFeatured = (e) => {
    e.preventDefault()
    dispatch(featuredBooks())
  }

  useEffect(() => {
    dispatch(fetchBooks)
  }, [dispatch])
  

  return (
    <div>
      <Navbar query={query} setQuery={setQuery} />
    
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
            <Books setCurrentBookId={setCurrentBookId} query={query} />
      </div>
      <div>
        <Input currentBookId={currentBookId} setCurrentBookId={setCurrentBookId} />
      </div>
    </div>
  </div>

  </div>
  )
}

export default Main