import React from 'react'
import { useGetProjectsQuery } from '../../features/api/apiSlice'
import Project from './Project'

const ProjectList = () => {
  const { data: projects, isLoading, isError } = useGetProjectsQuery()

  // decide what to render
  let content = null;

  if (isLoading) {
      content = (
        <div className="max-w-7xl col-span-12 w-full flex h-10 items-center justiry-center mx-auto p-2 text-teal-700 bg-teal-100">
           Loading....
        </div>
      );
  }

  if (!isLoading && isError) {
      content = (
        <div className="w-full flex items-center justify-center h-10 max-w-7xl mx-auto p-2 text-red-700 bg-red-100 col-span-12">
            There was an error occured!
        </div>
      )
  }

  if (!isLoading && !isError && projects?.length === 0) {
      content = (
        <div className="max-w-7xl col-span-12 w-full flex h-10 items-center justiry-center mx-auto p-2 text-teal-700 bg-teal-100">
           NO Projects Found!
        </div>
      )
  }

  if (!isLoading && !isError && projects?.length > 0) {
      content = projects.map((project)=> <Project project={project} key={project.id}/>)
  }

  return (
    <div>
        <h3 className="text-xl font-bold">Projects</h3>
        <div className="mt-3 space-y-4">
          {content}
        </div>
      </div>
  )
}

export default ProjectList