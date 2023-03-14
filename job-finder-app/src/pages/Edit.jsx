import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { updateEnd, updateJob } from '../features/job/jobSlice'

const Edit = () => {
  const { updating } = useSelector(state => state.job)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [type, setType] = useState('')
  const [salary, setSalary] = useState('')
  const [deadline, setDeadline] = useState('')
  const { id } = updating || {}

  useEffect(() => {
    const { id, title, type, salary, deadline } = updating || {}
    if(id){
      setTitle(title)
      setType(type)
      setSalary(salary)
      setDeadline(deadline)
    } else {
      navigate('/')
    }

  },[updating])


  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      title,
      type,
      salary: Number(salary),
      deadline
    }
    dispatch(updateJob({id, data}))
    navigate('/')
    dispatch(updateEnd())
  }

  return (
    <div className="max-w-[90rem] mx-auto px-4 sm:px-6 md:px-8" >
        <div className="lg:pl-[14rem] mt-[5.8125rem]">
      <main className="max-w-3xl rounded-lg mx-auto relative z-20 p-10 xl:max-w-none bg-[#1E293B]">
        <h1 className="mb-10 text-center lws-section-title">Edit Job</h1>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="fieldContainer">
              <label for="lws-JobTitle" className="text-sm font-medium text-slate-300">Job Title</label>
              <select value={title} onChange={(e) => setTitle(e.target.value)} 
                     id="lws-JobTitle" name="lwsJobTitle" required>
                <option value="" hidden selected>Select Job</option>
                <option>Software Engineer</option>
                <option>Software Developer</option>
                <option>Full Stack Developer</option>
                <option>MERN Stack Developer</option>
                <option>DevOps Engineer</option>
                <option>QA Engineer</option>
                <option>Product Manager</option>
                <option>Social Media Manager</option>
                <option>Senior Executive</option>
                <option>Junior Executive</option>
                <option>Android App Developer</option>
                <option>IOS App Developer</option>
                <option>Frontend Developer</option>
                <option>Frontend Engineer</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label for="lws-JobType">Job Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)}   
                     id="lws-JobType" name="lwsJobType" required>
                <option value="" hidden selected>Select Job Type</option>
                <option>Full Time</option>
                <option>Internship</option>
                <option>Remote</option>
              </select>
            </div>

            <div className="fieldContainer">
              <label for="lws-JobSalary">Salary</label>
              <div className="flex border rounded-md shadow-sm border-slate-600">
                <span className="input-tag">BDT</span>
                <input value={salary} onChange={(e) => setSalary(e.target.value)}
                  type="number" name="lwsJobSalary" id="lws-JobSalary" required className="!rounded-l-none !border-0"
                  placeholder="20,00,000" />
              </div>
            </div>

            <div className="fieldContainer">
              <label for="lws-JobDeadline">Deadline</label>
              <input value={deadline} onChange={(e) => setDeadline(e.target.value)}
                     type="date" name="lwsJobDeadline" id="lws-JobDeadline" required />
            </div>

            <div className="text-right">
              <button type="submit" id="lws-submit" className="cursor-pointer btn btn-primary w-fit">
                Edit
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
    </div>
  )
}

export default Edit