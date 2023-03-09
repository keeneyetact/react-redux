import React from 'react'
import { Link } from 'react-router-dom'
import DetailBlog from '../components/DetailBlog/DetailBlog'
import RelatedBlogList from '../components/RelatedBlogs/RelatedBlogList'

const Blog = () => {
  return (
    <div>
        <div className="container mt-8">
          <Link to="/" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
              className="mr-2 fa-solid fa-house"></i>Go Home</Link>
        </div>
        <section className="post-page-container">
                <DetailBlog />
              <RelatedBlogList />
        </section>
    </div>
  )
}

export default Blog