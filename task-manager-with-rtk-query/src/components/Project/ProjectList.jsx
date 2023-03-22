import React from 'react'
import { useGetProjectsQuery } from '../../features/api/apiSlice'

const ProjectList = () => {
  const { data, isLoading, isSuccess, isError } = useGetProjectsQuery()
  console.log(data)
  return (
    <div>
        <h3 class="text-xl font-bold">Projects</h3>
        <div class="mt-3 space-y-4">
          <div class="checkbox-container">
            <input type="checkbox" class="color-scoreboard" checked />
            <p class="label">Scoreboard</p>
          </div>

          <div class="checkbox-container">
            <input type="checkbox" class="color-flight" checked />
            <p class="label">Flight Booking</p>
          </div>

          <div class="checkbox-container">
            <input type="checkbox" class="color-productCart" checked />
            <p class="label">Product Cart</p>
          </div>

          <div class="checkbox-container">
            <input type="checkbox" class="color-bookstore" checked />
            <p class="label">Book Store</p>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" class="color-blog" checked />
            <p class="label">Blog Application</p>
          </div>
          <div class="checkbox-container">
            <input type="checkbox" class="color-jobFinder" checked />
            <p class="label">Job Finder</p>
          </div>
        </div>
      </div>
  )
}

export default ProjectList