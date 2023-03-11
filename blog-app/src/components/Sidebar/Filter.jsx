import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterSelected } from '../../features/filter/filterSlice'

const Filter = () => {
  const { isSaved } = useSelector(state => state.filter.filter)

  const dispatch = useDispatch()

  return (
    <div className="sidebar-content">
          <h4>Filter</h4>
          <div className="radio-group">
            <div>
              <input onChange={()=> dispatch(filterSelected(false))} 
              type="radio" name="filter" id="lws-all" 
              checked={!isSaved} className="radio" />
              <label for="lws-all">All</label>
            </div>
            <div>
              <input onChange={()=> dispatch(filterSelected(true))} 
              type="radio" name="filter" id="lws-saved" 
              checked={isSaved} className="radio" />
              <label for="lws-saved">Saved</label>
            </div>
          </div>
        </div>
  )
}

export default Filter