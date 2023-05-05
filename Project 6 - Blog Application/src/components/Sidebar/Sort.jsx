import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortSelected } from '../../features/sort/sortSlice'


const Sort = () => {
  const dispatch = useDispatch()
  const { sort } = useSelector(state => state.sort)


  return (
    <div className="sidebar-content">
    <h4>Sort</h4>
    <select onChange={(e) => dispatch(sortSelected(e.target.value))} 
            value={sort} name="sort" id="lws-sort" 
            className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
      <option value="">Default</option>
      <option value="createdAt">Newest</option>
      <option value="likes">Most Liked</option>
    </select>
  </div>
  )
}

export default Sort