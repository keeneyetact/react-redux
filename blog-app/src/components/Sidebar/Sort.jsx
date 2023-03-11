import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { sortSelected } from '../../features/sort/sortSlice'


const Sort = () => {
  const dispatch = useDispatch()
  const [sortValue, setSortValue] = useState('')

  const handleSelect = (e) => {
    setSortValue(e.target.value)
  }

  useEffect(() => {
    dispatch(sortSelected(sortValue))
  }, [dispatch, sortValue])

  return (
    <div className="sidebar-content">
    <h4>Sort</h4>
    <select onChange={handleSelect} name="sort" id="lws-sort" className="w-full max-w-[150px] border-2 rounded-md text-gray-500">
      <option value="">Default</option>
      <option value="createdAt">Newest</option>
      <option value="likes">Most Liked</option>
    </select>
  </div>
  )
}

export default Sort