import React from 'react'
import { Link } from 'react-router-dom'

const Blog = ({blog}) => {
  const { id, createdAt, title, image, isSaved, tags, likes } = blog

  return (
    <div className="lws-card">
    <Link to={`/blog/${id}`} >
      <img src={image} className="lws-card-image" alt={title} />
    </Link>
    <div className="p-4">
      <div className="lws-card-header">
        <p className="lws-publishedDate">{createdAt}</p>
        <p className="lws-likeCount"><i className="fa-regular fa-thumbs-up"></i>{likes}</p>
      </div>
      <Link to={`/blog/${id}`} className="lws-postTitle"> {title} </Link>
      <div className="lws-tags">
        {tags.map((tag) => <span>#{tag},</span>)}
        </div>
      <div className="flex gap-2 mt-4">
        {isSaved && <span className='lws-badge' > saved </span>}
      </div>
    </div>
  </div>
  )
}

export default Blog