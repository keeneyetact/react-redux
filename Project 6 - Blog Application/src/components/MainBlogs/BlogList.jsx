import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from '../../features/blogs/blogsSlice'

import Blog from './Blog'
import Loading from '../Ui/Loading'

const BlogList = () => {
  const dispatch = useDispatch()
  const { blogs, isLoading, isError, error } = useSelector(state => state.blogs)
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

  // decide what to render
  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
      content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && blogs?.length === 0) {
      content = <div className="col-span-12">No videos found!</div>;
  }

  if (!isError && !isLoading && blogs?.length > 0) {
      content = blogs.filter(filterBlogs).map((blog) => {
        return <Blog key={blog.id} blog={blog} />
     }) ;
  }
  
  return (
    <div className="post-container" id="lws-postContainer">
        { content }
   </div>
  )
}

export default BlogList