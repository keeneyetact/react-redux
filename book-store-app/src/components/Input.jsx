import React from 'react'

const Input = () => {
  return (
    <div className="p-4 overflow-hidden bg-white shadow-cardShadow rounded-md">
    <h4 className="mb-8 text-xl font-bold text-center">Add New Book</h4>
    <form className="book-form">
      <div className="space-y-2">
        <label for="name">Book Name</label>
        <input required className="text-input" type="text" id="input-Bookname" name="name" />
      </div>

      <div className="space-y-2">
        <label for="category">Author</label>
        <input required className="text-input" type="text" id="input-Bookauthor" name="author" />
      </div>

      <div className="space-y-2">
        <label for="image">Image Url</label>
        <input required className="text-input" type="text" id="input-Bookthumbnail" name="thumbnail" />
      </div>

      <div className="grid grid-cols-2 gap-8 pb-4">
        <div className="space-y-2">
          <label for="price">Price</label>
          <input required className="text-input" type="number" id="input-Bookprice" name="price" />
        </div>

        <div className="space-y-2">
          <label for="quantity">Rating</label>
          <input required className="text-input" type="number" id="input-Bookrating" name="rating" min="1" max="5" />
        </div>
      </div>

      <div className="flex items-center">
        <input id="input-Bookfeatured" type="checkbox" name="featured" className="w-4 h-4" />
        <label for="featured" className="ml-2 text-sm"> This is a featured book </label>
      </div>

      <button type="submit" className="submit" id="submit">Add Book</button>
    </form>
  </div>
  )
}

export default Input