import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RelatedBlog from './RelatedBlog'
import Loading from '../Ui/Loading'

import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";

const RelatedBlogList = ({ tags, id }) => {

  const dispatch = useDispatch()
  const { relatedBlogs, isLoading, isError, error } = useSelector(state => state.relatedBlogs)

  useEffect(() => {
    dispatch(fetchRelatedBlogs({ tags, id }))
  },[dispatch, tags, id])

  // decide what to render
  let content;

  if (isLoading) content = <Loading />;
  if (!isLoading && isError)
      content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && relatedBlogs?.length === 0) {
      content = <div className="col-span-12">No videos found!</div>;
  }

  if (!isError && !isLoading && relatedBlogs?.length > 0) {
    content = relatedBlogs.map((blog) => {
      return <RelatedBlog key={blog.id} blog={blog} />
    }) ;
}

  return (
    <div>
        <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">Related Posts</h4>
      <div className="space-y-4 related-post-container">
        { content }
      </div>
    </div>
  )
}

export default RelatedBlogList