import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { added, updated } from '../redux/books/actions'

const initialBook = {
  "name": "",
  "author": "",
  "thumbnail": "",
  "price": "",
  "rating": "",
  "featured": false,
}

const Input = ({ currentBookId, setCurrentBookId }) => {
  const dispatch = useDispatch()
  const [bookData, setBookData] = useState(initialBook)
  const currentBook = useSelector(state => state.books.filter(book => book.id === currentBookId)[0])
  console.log(currentBook)

  useEffect(() => {
    currentBook && setBookData(currentBook)
  }, [currentBook])

  const handleChange = (e) => {
    console.log(e.target)
    setBookData({...bookData, [e.target.name] : e.target.value})
    console.log(bookData)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(currentBookId){
      dispatch(updated(currentBookId, bookData))
    } else {
      dispatch(added(bookData))
    }
    console.log(bookData)
    setBookData(initialBook)
    setCurrentBookId(null)
  }
  
  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
    <h4 className="mb-8 text-xl font-bold text-center">{currentBookId ? "Editing Book" : "Add New Book"}</h4>
    <form onSubmit={handleSubmit} className="book-form">
      <div className="space-y-2">
        <label for="name">Book Name</label>
        <input onChange={handleChange} value={bookData.name}  
               required className="text-input" type="text" id="input-Bookname" name="name" />
      </div>

      <div className="space-y-2">
        <label for="category">Author</label>
        <input onChange={handleChange} value={bookData.author}  
               required className="text-input" type="text" id="input-Bookauthor" name="author" />
      </div>

      <div className="space-y-2">
        <label for="image">Image Url</label>
        <input onChange={handleChange} value={bookData.thumbnail}  
               required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label for="price">Price</label>
          <input onChange={handleChange} value={bookData.price}  
                 required className="text-input" type="number" id="input-Bookprice" name="price" />
        </div>

        <div className="space-y-2">
          <label for="quantity">Rating</label>
          <input onChange={handleChange} value={bookData.rating}  
                 required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
        </div>
      </div>

      <div className="flex items-center">
        <input onChange={(e) => setBookData({...bookData, [e.target.name]: e.target.checked})} checked={bookData.featured}  
               id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" />
        <label for="featured" className="ml-2 text-sm"> This is a featured book </label>
      </div>

      <button type="submit" className="submit" id="submit">{currentBook ? 'Edit Book' : 'Add Book'}</button>
    </form>
  </div>
  )
}

export default Input