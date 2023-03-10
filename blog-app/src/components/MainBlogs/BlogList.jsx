import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from '../../features/blogs/blogsSlice'

import Blog from './Blog'

const BlogList = () => {
  const dispatch = useDispatch()
  const {blogs} = useSelector(state => state.blogs)
  const { filter } = useSelector(state => state.filter)

    const filterBlogs = (blog) => {
      if(filter) {
        return blog.isSaved
      } else {
        return true
      }
    }

  console.log(blogs)

  useEffect(() => {
    dispatch(fetchBlogs('tags','filter','sort'))
  }, [dispatch])
  
  return (
    <div className="post-container" id="lws-postContainer">
        { blogs && blogs.filter(filterBlogs).map((blog) => {
           return <Blog key={blog.id} blog={blog} />
        }) }
   </div>
  )
}

export default BlogList