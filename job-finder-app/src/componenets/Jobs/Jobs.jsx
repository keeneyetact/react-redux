import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Job from './Job'
import { fetchJobs } from '../../features/job/jobSlice'

const Jobs = () => {
  const { jobs } = useSelector(state => state.job)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchJobs())
  },[])

  console.log(jobs)

  return (
    <div className="jobs-list">
      {jobs && jobs.map((job) => <Job key={job.id} job={job} />)}
    </div>
  )
}

export default Jobs