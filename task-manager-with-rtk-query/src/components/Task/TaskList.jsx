import React from 'react'
import { useSelector } from 'react-redux'
import { useGetTasksQuery } from '../../features/task/taskApi'
import Task from './Task'

const TaskList = () => {
  const { data, isSuccess, isError } = useGetTasksQuery()
  const { project } = useSelector(state => state.filter.filter)

  const filterByProject = (task) => {
    return !project.some((excludeProject) => {
      return task.project.projectName === excludeProject.projectName;
    });
  }

  return (
    <div className="lws-task-list">
          {
            data && data.filter(filterByProject).map((task) => <Task task={task} key={task.id} />)
          }
        </div>
  )
}

export default TaskList