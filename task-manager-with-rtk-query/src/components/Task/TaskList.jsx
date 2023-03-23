import React from 'react'
import { useGetTasksQuery } from '../../features/task/taskApi'
import Task from './Task'

const TaskList = () => {
  const { data, isSuccess, isError } = useGetTasksQuery()
  console.log(data)
  return (
    <div className="lws-task-list">
          {
            data && data.map((task) => <Task task={task} key={task.id} />)
          }
        </div>
  )
}

export default TaskList