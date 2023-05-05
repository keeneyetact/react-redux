import React from 'react'
import BlogList from '../components/MainBlogs/BlogList'
import Filter from '../components/Sidebar/Filter'
import Sort from '../components/Sidebar/Sort'

const Home = () => {
  return (
    <div className="wrapper">
      <div className="sidebar-items">
        <Sort />
        <Filter />
      </div>
        <BlogList />
    </div>
  )
}

export default Home