import React from 'react'
import { useSelector } from 'react-redux'
import Book from './Book'

const Books = ({ setCurrentBookId }) => {
    const books = useSelector(state => state.books)
    const { isFeatured } = useSelector(state => state.filters)
    console.log(books)

    const filterByFeatured = (book) => {
      if(isFeatured) {
        return book.featured
      } else {
        return true
      }
    }

  return (
    <div className="lws-bookContainer" >
        {books && books.filter(filterByFeatured).map((book) => {
            return <Book book={book} key={book.id}  setCurrentBookId={setCurrentBookId}/>
        })}
    </div>
  )
}

export default Books