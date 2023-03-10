import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { filterSelected } from '../../features/filter/filterSlice'

const Filter = () => {
  const [filterPost, setFilterPost] = useState(false)
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(filterSelected(filterPost))
  }, [filterPost, dispatch])

  return (
    <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            <div>
              <input onChange={()=> setFilterPost(false)} type="radio" name="filter" id="lws-all" checked={!filterPost} className="radio" />
              <label for="lws-all">All</label>
            </div>
            <div>
              <input onChange={()=> setFilterPost(true)} type="radio" name="filter" id="lws-saved" checked={filterPost} className="radio" />
              <label for="lws-saved">Saved</label>
            </div>
          </div>
        </div>
  )
}

export default Filter