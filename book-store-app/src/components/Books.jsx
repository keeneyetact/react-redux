import React from 'react'
import { useSelector } from 'react-redux'
import Book from './Book'

const Books = () => {
    const books = useSelector((state) => state.books)
    console.log(books)
  return (
    <div className="lws-bookContainer" >
        {books && books.map((book) => {
            return <Book book={book} key={book.id} />
        })}
    </div>
  )
}

export default Books