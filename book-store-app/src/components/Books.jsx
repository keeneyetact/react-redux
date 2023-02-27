import React from 'react'
import { useSelector } from 'react-redux'
import Book from './Book'

const Books = () => {
    const books = useSelector(state => state.books)
    const { isFeatured } = useSelector(state => state.filters)
    console.log(books)

    const filterByFeatured = (book) => {
      if(isFeatured) {
        return book.featured
      } else {
        return !book.featured
      }
    }

  return (
    <div className="lws-bookContainer" >
        {books && books.filter(filterByFeatured).map((book) => {
            return <Book book={book} key={book.id} />
        })}
    </div>
  )
}

export default Books