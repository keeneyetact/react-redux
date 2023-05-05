import React from 'react'
import Book from './Book'
import { useGetBooksQuery } from '../features/api/apiSlice'
import { useSelector } from 'react-redux'

const Books = () => {
  const { data: books, isLoading, isError } = useGetBooksQuery()
  const { search, isFeatured } = useSelector(state => state.filter.filter)

  const filterBySearch =  ( book ) => {
    if (search === "") {
      return book;
    } else if (book.name.toLowerCase().includes(search.toLowerCase())) {
      return book;
    }
  }

  const filterByFeatured = (book) => {
    if(isFeatured) {
      return book.featured
    } else {
      return true
    }
  }

  // decide what to render
  let content = null;

  if (isLoading) {
      content = (
        <div className="max-w-7xl col-span-12 w-full flex h-10 items-center justiry-center mx-auto p-2 text-teal-700 bg-teal-100">
           Loading....
        </div>
      );
  }

  if (!isLoading && isError) {
      content = (
        <div className="w-full flex items-center justify-center h-10 max-w-7xl mx-auto p-2 text-red-700 bg-red-100 col-span-12">
            There was an error occured!
        </div>
      )
  }

  if (!isLoading && !isError && books?.length === 0) {
      content = (
        <div className="max-w-7xl col-span-12 w-full flex h-10 items-center justiry-center mx-auto p-2 text-teal-700 bg-teal-100">
           NO Books Found!
        </div>
      )
  }

  if (!isLoading && !isError && books?.length > 0) {
      content = books.filter(filterByFeatured).filter(filterBySearch).map((book) => <Book key={book.id} book={book} />);
  }


  return (
    <div className="space-y-6 md:space-y-0 md:grid grid-cols-1 lg:grid-cols-3 gap-6">
        {content}
      </div>
  )
}

export default Books