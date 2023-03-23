import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import { searchBy } from '../features/filter/filterSlice'

const Navbar = () => {
  const { search } = useSelector(state => state.filter.filter)
  const dispatch = useDispatch()

  return (
    <nav className="container relative py-3">
    <div className="flex items-center justify-between">
      <Link to="/" >
        <img src={logo} alt="" />
      </Link>
      <div className="flex-1 max-w-xs search-field group">
        <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
        <input type="text" placeholder="Search Task" value={search} onChange={e => dispatch(searchBy(e.target.value))} className="search-input" id="lws-searchTask" />
      </div>
    </div>
  </nav>
  )
}

export default Navbar