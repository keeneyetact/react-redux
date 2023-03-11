import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from '../../features/blogs/blogsSlice'

import Blog from './Blog'

const BlogList = () => {
  const dispatch = useDispatch()
  const { blogs } = useSelector(state => state.blogs)
  const { isSaved } = useSelector(state => state.filter.filter)
  const { sort } = useSelector(state => state.sort)


    const filterBlogs = (blog) => {
      if(isSaved) {
        return blog.isSaved
      } else {
        return true
      }
    }

  useEffect(() => {
    dispatch(fetchBlogs({sort}))
  }, [dispatch, sort])
  
  return (
    <div className="post-container" id="lws-postContainer">
        { blogs && blogs.filter(filterBlogs).map((blog) => {
           return <Blog key={blog.id} blog={blog} />
        }) }
   </div>
  )
}

export default BlogList