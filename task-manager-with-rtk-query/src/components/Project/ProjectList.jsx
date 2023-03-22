import React from 'react'
import { useGetProjectsQuery } from '../../features/api/apiSlice'
import Project from './Project'

const ProjectList = () => {
  const { data, isLoading, isSuccess, isError } = useGetProjectsQuery()
  console.log(data)
  return (
    <div>
        <h3 className="text-xl font-bold">Projects</h3>
        <div className="mt-3 space-y-4">
          {/* <div className="checkbox-container">
            <input type="checkbox" className="color-scoreboard" checked />
            <p className="label">Scoreboard</p>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="color-flight" checked />
            <p className="label">Flight Booking</p>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="color-productCart" checked />
            <p className="label">Product Cart</p>
          </div>

          <div className="checkbox-container">
            <input type="checkbox" className="color-bookstore" checked />
            <p className="label">Book Store</p>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className="color-blog" checked />
            <p className="label">Blog Application</p>
          </div>
          <div className="checkbox-container">
            <input type="checkbox" className="color-jobFinder" checked />
            <p className="label">Job Finder</p>
          </div> */}
          {data && data.map((project)=> <Project project={project} key={project.id}/>)
          }
        </div>
      </div>
  )
}

export default ProjectList