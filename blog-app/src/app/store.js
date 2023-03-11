import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import blogsReducer from '../features/blogs/blogsSlice'
import relatedBlogsReducer from '../features/relatedBlogs/relatedBlogsSlice'
import blogReducer from '../features/blog/blogSlice'
import filterReducer from '../features/filter/filterSlice'
import sortReducer from '../features/sort/sortSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    blogs: blogsReducer,
    blog: blogReducer,
    relatedBlogs: relatedBlogsReducer,
    filter: filterReducer,
    sort: sortReducer
  },
});
