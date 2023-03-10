import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom'
import DetailBlog from '../components/DetailBlog/DetailBlog'
import RelatedBlogList from '../components/RelatedBlogs/RelatedBlogList'
import { fetchBlog } from "../features/blog/blogSlice";

const Blog = () => {
  const dispatch = useDispatch()
  const {blog} = useSelector(state => state.blog)

  const { blogId } = useParams()

  useEffect(() => {
    dispatch(fetchBlog(blogId))
  },[blogId, dispatch])
  return (
    <div>
        <div className="container mt-8">
          <Link to="/" className="inline-block text-gray-600 home-btn" id="lws-goHome"><i
              className="mr-2 fa-solid fa-house"></i>Go Home</Link>
        </div>
        <section className="post-page-container">
                <DetailBlog blog={blog} />
              <RelatedBlogList />
        </section>
    </div>
  )
}

export default Blog