import React from 'react'
import { useDispatch } from 'react-redux'
import { updateBlogLike } from '../../features/blog/blogSlice'

const DetailBlog = ({blog}) => {
  const { id, title, description, tags, likes, isSaved, image } = blog
  const dispatch = useDispatch()

  const handleLikes = (e) => {
    e.preventDefault()
    const newBlog = {
      ...blog,
      likes: likes + 1
    }
    dispatch(updateBlogLike({id, newBlog}))
  }

  return (
    <main className="post">
      <img src={image} alt={title} className="w-full rounded-md" id="lws-megaThumb" />
      <div>
        <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
          {title}
        </h1>
        <div className="tags" id="lws-singleTags">
          { tags && tags.map((tag) => <span>#{tag},</span>)}
        </div>
        <div className="btn-group">
          <button onClick={handleLikes} className="like-btn" id="lws-singleLinks">
            <i className="fa-regular fa-thumbs-up"></i> {likes}
          </button>
          <button className={`${isSaved ? 'active save-btn' : 'save-btn'}`} id="lws-singleSavedBtn">
            <i className="fa-regular fa-bookmark"></i> {isSaved ? 'Saved' : 'Save'}
          </button>
        </div>
        <div className="mt-6">
          <p>
            {description}
          </p>
        </div>
      </div>
    </main>
  )
}

export default DetailBlog