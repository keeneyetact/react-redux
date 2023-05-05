import React from 'react'
import { useSelector } from 'react-redux'
import { useGetAllTaskQuery } from '../../features/task/taskApi'
import Task from './Task'

const TaskList = () => {
  const { data: tasks, isLoading, isError } = useGetAllTaskQuery()
  const { project, search } = useSelector(state => state.filter.filter)

  const filterByProject = (task) => {
    return !project.some((excludeProject) => {
      return task.project.projectName === excludeProject.projectName;
    });
  }

  const filterByTaskName = (task) => {
    if(search === ''){
      return task
    } else if (task.taskName.toLowerCase().includes(search.toLowerCase())) {
      return task
    }
  }

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

  if (!isLoading && !isError && tasks?.length === 0) {
      content = (
        <div className="max-w-7xl col-span-12 w-full flex h-10 items-center justiry-center mx-auto p-2 text-teal-700 bg-teal-100">
           NO Tasks Found!
        </div>
      )
  }

  if (!isLoading && !isError && tasks?.length > 0) {
      content = tasks.filter(filterByProject).filter(filterByTaskName).map((task) => <Task key={task.id} task={task}/>)
  }

  return (
    <div className="lws-task-list">
          {content}
        </div>
  )
}

export default TaskList