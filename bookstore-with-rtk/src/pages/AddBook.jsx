import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAddBookMutation } from '../features/api/apiSlice'

const initialBook = {
    "name": "",
    "author": "",
    "thumbnail": "",
    "price": "",
    "rating": "",
    "featured": false,
  }

  

const AddBook = () => {
    const navigate = useNavigate()
    const [bookData, setBookData] = useState(initialBook)
    const [addBook, { isLoading }] = useAddBookMutation()

    const handleChange = (e) => {
        setBookData({...bookData, [e.target.name] : e.target.value})
      }
    
      const handleSubmit = (e) =>{
        e.preventDefault()
        addBook(bookData)
        navigate('/')
      }


  return (
    <div className="py-6 2xl:px-6">
    <div className="container">
        <div className="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
            <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
            <form onSubmit={handleSubmit} className="book-form">
                <div className="space-y-2">
                    <label for="lws-bookName">Book Name</label>
                    <input onChange={handleChange} value={bookData.name}  
                            required className="text-input" type="text" id="lws-bookName" name="name" />
                </div>

                <div className="space-y-2">
                    <label for="lws-author">Author</label>
                    <input onChange={handleChange} value={bookData.author}  
                            required className="text-input" type="text" id="lws-author" name="author" />
                </div>

                <div className="space-y-2">
                    <label for="lws-thumbnail">Image Url</label>
                    <input onChange={handleChange} value={bookData.thumbnail}  
                            required className="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
                </div>

                <div className="grid grid-cols-2 gap-8 pb-4">
                    <div className="space-y-2">
                        <label for="lws-price">Price</label>
                        <input onChange={handleChange} value={bookData.price}  
                               required className="text-input" type="number" id="lws-price" name="price" />
                    </div>

                    <div className="space-y-2">
                        <label for="lws-rating">Rating</label>
                        <input onChange={handleChange} value={bookData.rating}  
                               required className="text-input" type="number" id="lws-rating" name="rating" min="1"
                            max="5" />
                    </div>
                </div>

                <div className="flex items-center">
                    <input onChange={(e) => setBookData({...bookData, [e.target.name]: e.target.checked})}
                               checked={bookData.featured}  
                               id="lws-featured" type="checkbox" name="featured" className="w-4 h-4" />
                    <label for="lws-featured" className="ml-2 text-sm"> This is a featured book </label>
                </div>

                <button disabled={isLoading} type="submit" className="submit" id="lws-submit">Add Book</button>
            </form>
        </div>
    </div>
    </div>
  )
}

export default AddBook