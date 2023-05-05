import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Job from './Job'
import { fetchJobs } from '../../features/job/jobSlice'
import { useParams } from 'react-router-dom'

const Jobs = () => {
  const {query} = useParams()
  const dispatch = useDispatch()
  const { jobs } = useSelector(state => state.job)
  const { search, sort } = useSelector(state => state.filter)
  

  const filterBySearch =  ( job ) => {
    if (search === "") {
      return job;
    } else if (job.title.toLowerCase().includes(search.toLowerCase())) {
      return job;
    }
  }

  const filterBySort = (a, b) => {
    if ( sort === "lowToHigh") {
      return Number(a.salary) -Number(b.salary)
    } else if ( sort === "highToLow") {
      return Number(b.salary) -Number(a.salary)
    } 
    return
  }

  useEffect(() => {
    dispatch(fetchJobs(query))
  },[query])

  console.log(jobs)

  return (
    <div className="jobs-list">
      {jobs && jobs
                    .filter(filterBySearch)
                    .sort(filterBySort)
                    .map((job) => <Job key={job.id} job={job} />)}
    </div>
  )
}

export default Jobs