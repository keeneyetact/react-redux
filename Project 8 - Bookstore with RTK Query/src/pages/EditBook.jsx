import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useEditBookMutation, useGetBookQuery } from '../features/api/apiSlice'

const initialBook = {
    "name": "",
    "author": "",
    "thumbnail": "",
    "price": "",
    "rating": "",
    "featured": false,
  }

const EditBook = () => {
    const navigate = useNavigate()
    const {bookId} = useParams()
    const [bookData, setBookData] = useState(initialBook)
    const { data: book, isError } = useGetBookQuery(bookId)
    const [editBook, { isLoading }] = useEditBookMutation()

    useEffect(() => {
        book && setBookData(book)
      }, [book])
    
      const handleChange = (e) => {
        setBookData({...bookData, [e.target.name] : e.target.value})
      }
    
      const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(bookData)
        editBook({ id: bookId, data: bookData })
        navigate('/')
      }

      if(isError) {
        return (<div className="w-full flex items-center justify-center h-10 max-w-7xl mx-auto p-2 text-red-700 bg-red-100 col-span-12">
                    There was an error occured!
                </div>)
      }


  return (
    <div class="py-6 2xl:px-6">
        <div class="container">
            <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                <h4 class="mb-8 text-xl font-bold text-center">Edit Book</h4>
                <form onSubmit={handleSubmit} class="book-form">
                    <div class="space-y-2">
                        <label for="lws-bookName">Book Name</label>
                        <input onChange={handleChange} value={bookData.name}  
                               required class="text-input" type="text" id="lws-bookName" name="name" />
                    </div>

                    <div class="space-y-2">
                        <label for="lws-author">Author</label>
                        <input onChange={handleChange} value={bookData.author}  
                               required class="text-input" type="text" id="lws-author" name="author" />
                    </div>

                    <div class="space-y-2">
                        <label for="lws-thumbnail">Image Url</label>
                        <input  onChange={handleChange} value={bookData.thumbnail}  
                                required class="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
                    </div>

                    <div class="grid grid-cols-2 gap-8 pb-4">
                        <div class="space-y-2">
                            <label for="lws-price">Price</label>
                            <input onChange={handleChange} value={bookData.price}  
                                   required class="text-input" type="number" id="lws-price" name="price" />
                        </div>

                        <div class="space-y-2">
                            <label for="lws-rating">Rating</label>
                            <input onChange={handleChange} value={bookData.rating}  
                                   required class="text-input" type="number" id="lws-rating" name="rating" min="1"
                                max="5" />
                        </div>
                    </div>

                    <div class="flex items-center">
                        <input onChange={(e) => setBookData({...bookData, [e.target.name]: e.target.checked})}
                               checked={bookData.featured}  
                               id="lws-featured" type="checkbox" name="featured" class="w-4 h-4" />
                        <label for="lws-featured" class="ml-2 text-sm"> This is a featured book </label>
                    </div>

                    <button disabled={isLoading} type="submit" class="submit" id="lws-submit">Edit Book</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditBook