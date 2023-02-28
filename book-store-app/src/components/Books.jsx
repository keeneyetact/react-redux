import React from 'react'
import { useSelector } from 'react-redux'
import Book from './Book'

const Books = ({ setCurrentBookId, query }) => {
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

    const filterByQuery = (book) => {
        if (query === "") {
          //if query is empty
          return book;
        } else if (book.name.toLowerCase().includes(query.toLowerCase())) {
          //returns filtered array
          return book;
        }
    }

  return (
    <div className="lws-bookContainer" >
        {books && books
                      .filter(filterByFeatured)
                      .filter(filterByQuery)
                      .map((book) => {
            return <Book book={book} key={book.id}  setCurrentBookId={setCurrentBookId}/>
        })}
    </div>
  )
}

export default Books