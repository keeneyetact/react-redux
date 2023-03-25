import React from 'react'
import { useSelector } from 'react-redux'
import { useGetAllTaskQuery } from '../../features/task/taskApi'
import Task from './Task'

const TaskList = () => {
  const { data } = useGetAllTaskQuery()
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

  return (
    <div className="lws-task-list">
          {
            data && data.filter(filterByProject).filter(filterByTaskName).map((task) => <Task key={task.id} task={task}/>)
          }
        </div>
  )
}

export default TaskList