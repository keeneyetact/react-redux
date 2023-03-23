import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetProjectsQuery, useGetTeamQuery } from '../features/api/apiSlice'
import { useAddTaskMutation } from '../features/task/taskApi'


const AddTask = () => {
  const { data: teamList } = useGetTeamQuery()
  const { data: projectList } = useGetProjectsQuery()
  const [ addTask, {isSuccess}] = useAddTaskMutation()
  const navigate = useNavigate()

  const [ projectName, setProjectName] = useState('')
  const [ taskName, setTaskName] = useState('')
  const [ teamMemberName, setTeamMemberName] = useState('')
  const [ deadline, setDeadline] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()
    const teamSelected = teamList.find((t)=> t.name === teamMemberName)
    const projectSelected = projectList.find((p) => p.projectName === projectName)
    addTask({ data: {project: projectSelected, taskName, deadline, teamMember: teamSelected, status: 'Pending'}})
    navigate('/')
  }

  // useEffect(()=> {
  //   if(isSuccess) navigate('/')
  // },[isSuccess, navigate])

  return (
    <div className="container relative">
      <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
        <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
          Create Task for Your Team
        </h1>

        <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <button type="submit" className="lws-submit">Save</button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

export default AddTask