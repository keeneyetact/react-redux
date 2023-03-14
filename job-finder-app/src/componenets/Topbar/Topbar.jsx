import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { searchBy, sortBy } from '../../features/job/filter/filterSlice'

const Topbar = () => {
  const dispatch = useDispatch()
  const { search, sort } = useSelector(state => state.filter)

  return (
    <div className="md:flex space-y-2 md:space-y-0 justify-between mb-10 ">
    <h1 className="lws-section-title">All Available Jobs</h1>
    <div className="flex gap-4">
        <div className="search-field group flex-1">
            <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
            <input value={search} onChange={(e) => dispatch(searchBy(e.target.value))} type="text" placeholder="Search Job" className="search-input" id="lws-searchJob" />
        </div>
        <select value={sort} onChange={(e) => dispatch(sortBy(e.target.value))} id="lws-sort" name="sort" autocomplete="sort" className="flex-1">
            <option value='' >Default</option>
            <option value='lowToHigh' >Salary (Low to High)</option>
            <option value='highToLow' >Salary (High to Low)</option>
        </select>
    </div>
</div>
  )
}

export default Topbar