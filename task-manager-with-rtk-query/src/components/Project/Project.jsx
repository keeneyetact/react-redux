import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { filterBy } from '../../features/filter/filterSlice'

const Project = ({project}) => {
    const { id, colorClass, projectName } = project || {}
    const {filter} = useSelector(state => state.filter)
    const dispatch = useDispatch()
    const checkValue = filter.project.some(p => p.id === id)
    
    const handleChecked = (e) => {
      dispatch(filterBy(project))
    }
  return (
          <div className="checkbox-container">
            <input type="checkbox" className={colorClass} checked={!checkValue} onChange={handleChecked} />
            <p className="label">{projectName}</p>
          </div>
  )
}

export default Project