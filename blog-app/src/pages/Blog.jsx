import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import DetailBlog from '../components/DetailBlog/DetailBlog'
import RelatedBlogList from '../components/RelatedBlogs/RelatedBlogList'
import { fetchBlog } from "../features/blog/blogSlice";
import { fetchRelatedBlogs } from "../features/relatedBlogs/relatedBlogsSlice";

const Blog = () => {
  const dispatch = useDispatch()
  const {blog} = useSelector(state => state.blog)
  const { relatedBlogs } = useSelector(state => state.relatedBlogs)
  console.log(relatedBlogs)
  const { blogId } = useParams()
  const { id, tags } = blog

  useEffect(() => {
    dispatch(fetchBlog(blogId))
  },[blogId, dispatch,])

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id }))
  },[dispatch, tags, id])

  
  return (
    <div>
        <div className="container mt-8">
          <Link to="/" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
              className="mr-2 fa-solid fa-house"></i>Go Home</Link>
        </div>
        <section className="post-page-container">
                <DetailBlog blog={blog} />
              <RelatedBlogList relatedBlogs={relatedBlogs} />
        </section>
    </div>
  )
}

export default Blog