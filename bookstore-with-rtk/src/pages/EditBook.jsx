import React from 'react'

const EditBook = () => {
  return (
    <div class="py-6 2xl:px-6">
        <div class="container">
            <div class="p-8 overflow-hidden bg-white shadow-cardShadow rounded-md max-w-xl mx-auto">
                <h4 class="mb-8 text-xl font-bold text-center">Edit Book</h4>
                <form class="book-form">
                    <div class="space-y-2">
                        <label for="lws-bookName">Book Name</label>
                        <input required class="text-input" type="text" id="lws-bookName" name="name" />
                    </div>

                    <div class="space-y-2">
                        <label for="lws-author">Author</label>
                        <input required class="text-input" type="text" id="lws-author" name="author" />
                    </div>

                    <div class="space-y-2">
                        <label for="lws-thumbnail">Image Url</label>
                        <input required class="text-input" type="text" id="lws-thumbnail" name="thumbnail" />
                    </div>

                    <div class="grid grid-cols-2 gap-8 pb-4">
                        <div class="space-y-2">
                            <label for="lws-price">Price</label>
                            <input required class="text-input" type="number" id="lws-price" name="price" />
                        </div>

                        <div class="space-y-2">
                            <label for="lws-rating">Rating</label>
                            <input required class="text-input" type="number" id="lws-rating" name="rating" min="1"
                                max="5" />
                        </div>
                    </div>

                    <div class="flex items-center">
                        <input id="lws-featured" type="checkbox" name="featured" class="w-4 h-4" />
                        <label for="lws-featured" class="ml-2 text-sm"> This is a featured book </label>
                    </div>

                    <button type="submit" class="submit" id="lws-submit">Edit Book</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default EditBook