import React from 'react'
import RelatedBlog from './RelatedBlog'

const RelatedBlogList = ({ relatedBlogs }) => {
  return (
    <div>
        <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div className="space-y-4 related-post-container">
        { relatedBlogs && relatedBlogs.map((blog) => {
          return <RelatedBlog key={blog.id} blog={blog} />
        }) }
      </div>
    </div>
  )
}

export default RelatedBlogList