import React from 'react'
import RelatedBlog from './RelatedBlog'

const RelatedBlogList = () => {
  return (
    <div>
        <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div className="space-y-4 related-post-container">
        <RelatedBlog />
        <RelatedBlog />
        <RelatedBlog />
      </div>
    </div>
  )
}

export default RelatedBlogList