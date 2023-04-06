import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import LearningPortal from '../../../assets/image/learningportal.svg'
import Error from '../../../components/common/Error'
import { useAddAssignmentMutation } from '../../../features/assignments/assignmentsApi'
import { useGetVideosQuery } from '../../../features/videos/videosApi'

const AddAssignment = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [totalMark, setTotalMark] = useState()
    const [videoTitle, setVideoTitle] = useState()
    const [videoId, setVideoId] = useState()
    const [error, setError] = useState('')

    const {data: videoList } = useGetVideosQuery()
    const [addAssignment, { isLoading, isSuccess, error: addError }] = useAddAssignmentMutation()


    const handleSubmit = (e) => {
        e.preventDefault()
        addAssignment({
            data: {
                title,
                totalMark,
                video_id: videoId,
                video_title: videoTitle
            }
        })
    }

    useEffect(()=> {
        if(addError?.data) setError("Something went wrong. Please, give a refresh and try again!!!")
        // console.log(addError)
    },[addError])

    useEffect(()=> {
          if(isSuccess) navigate('/admin/assignment')
    },[isSuccess, navigate])
    
  return (
    <div className="mt-8 py-4 bg-primary h-screen place-items-center">
        <div className="mx-auto max-w-md md:max-w-lg px-5 lg:px-0">
            <div>
                <img className="h-12 mx-auto" src={LearningPortal} alt="" />            
                <h1 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                    Add New Assignment
                </h1>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit} >
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="title" className="sr-only">Title here..</label>
                        <input id="title" name="title" type="text" required
                               value={title} onChange={(e)=> setTitle(e.target.value)}
                               className="video-form-input rounded-t-md" placeholder="Enter Assignment Title Here.." />
                    </div>
                    <div>
                        <label htmlFor="video" className="sr-only">Assignment Video here..</label>
                        <select id="video" name="video" value={videoTitle} 
                                onChange={e => { setVideoTitle(e.target.value); setVideoId(e.target.options[e.target.selectedIndex].getAttribute('id')); }} 
                                className="video-form-input rounded-t-md" required>
                                <option value="" hidden selected>Select Video For Assignment Here..</option>
                                { videoList && videoList.map(v => <option key={v.id} value={v.title} id={v.id} >{v.title}</option>)}
                            </select>
                    </div>
                    <div>
                        <label htmlFor="totalMark" className="sr-only">Mark here..</label>
                        <input id="totalMark" name="totalMark" type="number" required
                               value={totalMark} onChange={(e)=> setTotalMark(e.target.value)}
                               className="video-form-input rounded-t-md" placeholder="Enter Assignment Mark Here.." />
                    </div>
    
                </div>

                <div>
                    <button type="submit" disabled={isLoading}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                        Add Assignment
                    </button>
                </div>

                {error !== "" && <Error message={error} />}
            </form>
        </div>
    </div>
  )
}

export default AddAssignment