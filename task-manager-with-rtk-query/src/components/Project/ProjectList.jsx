import React from 'react'
import { useGetProjectsQuery } from '../../features/api/apiSlice'
import Project from './Project'

const ProjectList = () => {
  const { data, isLoading, isSuccess, isError } = useGetProjectsQuery()
  return (
    <div>
        <h3 className="text-xl font-bold">Projects</h3>
        <div className="mt-3 space-y-4">
          {
          data && data.map((project)=> <Project project={project} key={project.id}/>)
          }
        </div>
      </div>
  )
}

export default ProjectList