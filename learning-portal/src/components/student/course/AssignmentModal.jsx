import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useSubmitAssignmentMutation } from '../../../features/assignmentMark/assignmentMarkApi'
import Error from '../../common/Error'

const AssignmentModal = ({ open, control, assignment }) => {
    const { user } = useSelector(state => state.auth)
    const [ submitAssignment, {error, isSuccess, isLoading}] = useSubmitAssignmentMutation()
    const [repo_link, setRepo_link] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            student_id: user?.id,
            student_name: user?.name,
            assignment_id: assignment?.id,
            title: assignment?.title,
            createdAt: new Date(),
            totalMark: assignment?.totalMark,
            mark: 0,
            status: "pending",
            repo_link
        }
        submitAssignment({data})
        console.log(data)
    }
    useEffect(()=> {
        if(isSuccess){
            control()
        }
    },[isSuccess])
  return (
    open && (
        <>
            <div
                onClick={control}
                className="fixed w-full h-full inset-0 z-10 bg-black/50 cursor-pointer backdrop-filter backdrop-blur-sm z-20"
            ></div>
            <div className="rounded w-[400px] lg:w-[600px] space-y-8 bg-secondary rounded-md border border-slate-50/10 p-10 absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                    Submit Your Assignment Now
                </h2>
                <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="repo" className="sr-only">
                                Repo Link
                            </label>
                            <input
                                id="repo"
                                name="repo"
                                type="text"
                                required
                                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-violet-500 focus:border-violet-500 focus:z-10 sm:text-sm"
                                placeholder="Repo Link Here"
                                onChange={(e) =>
                                    setRepo_link(e.target.value)
                                }
                            />
                        </div>
                        
                    </div>

                    <div>
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
                        >
                            Submit Assignment
                        </button>
                    </div>

                    {error?.data && <Error message={error?.data} />}
                </form>
            </div>
        </>
    )
  )
}

export default AssignmentModal