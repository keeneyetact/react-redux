import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProjectsQuery, useGetTeamQuery } from '../features/api/apiSlice'
import { useEditTaskMutation, useGetTaskQuery } from '../features/task/taskApi'

const EditTask = () => {
  const navigate = useNavigate()
  const {taskId} = useParams()
  const { data: teamList } = useGetTeamQuery()
  const { data: projectList } = useGetProjectsQuery()
  const { data: currentTask } = useGetTaskQuery(taskId)
  const [editTask, { isLoading, isSuccess}] = useEditTaskMutation()

  const [ projectName, setProjectName] = useState('')
  const [ taskName, setTaskName] = useState('')
  const [ teamMemberName, setTeamMemberName] = useState('')
  const [ deadline, setDeadline] = useState('')


  useEffect(()=> {
    setProjectName(currentTask?.project?.projectName)
    setTaskName(currentTask?.taskName)
    setTeamMemberName(currentTask?.teamMember?.name)
    setDeadline(currentTask?.deadline)
  },[currentTask])


  const handleSubmit = (e) => {
    e.preventDefault()
    const teamSelected = teamList.find((t)=> t.name === teamMemberName)
    const projectSelected = projectList.find((p) => p.projectName === projectName)
    editTask({ id : taskId, data: {project: projectSelected, taskName, deadline, teamMember: teamSelected}})
    navigate('/')
  }

  return (
    <div className="container relative">
      <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
          Edit Task for Your Team
        </h1>

        <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="fieldContainer">
              <label for="lws-taskName">Task Name</label>
              <input
                type="text"
                name="taskName"
                id="lws-taskName"
                required
                placeholder="Implement RTK Query"
                value={taskName}
                onChange={e => setTaskName(e.target.value)}
              />
            </div>

            <div className="fieldContainer">
              <label>Assign To</label>
              <select name="teamMember" id="lws-teamMember" value={teamMemberName} onChange={e => setTeamMemberName(e.target.value)} required>
                <option value="" hidden selected>Select Job</option>
                { teamList && teamList.map(t => <option key={t.id}>{t.name}</option>)}
              </select>
            </div>
            <div className="fieldContainer">
              <label for="lws-projectName">Project Name</label>
              <select id="lws-projectName" name="projectName" value={projectName} onChange={e => setProjectName(e.target.value)} required>
                <option value="" hidden selected>Select Project</option>
                { projectList && projectList.map(p => <option key={p.id}>{p.projectName}</option>)}
              </select>
            </div>

            <div className="fieldContainer">
              <label for="lws-deadline">Deadline</label>
              <input type="date" name="deadline" id="lws-deadline" required value={deadline} onChange={e => setDeadline(e.target.value)} />
            </div>

            <div className="text-right">
              <button type="submit" className="lws-submit" disabled={isLoading} >Save</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default EditTask