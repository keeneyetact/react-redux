import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LearningPortal from '../../assets/image/learningportal.svg'
import Error from '../../components/common/Error'
import { useAddVideoMutation } from '../../features/videos/videosApi'

const AddVideo = () => {
    const navigate = useNavigate()
    const [ title, setTitle ] = useState('')
    const [ description, setDescription ] = useState('')
    const [ url, setUrl ] = useState('')
    const [ views, setViews ] = useState('')
    const [ duration, setDuration] = useState('')
    const [ error, setError ] = useState('')

    const [ addVideo, {isLoading, isSuccess, error: addError }] = useAddVideoMutation()

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')
        addVideo({
            data: {
                title,
                description,
                url,
                views,
                duration,
                createdAt: new Date()
            }
        })
    }

    useEffect(()=> {
        if(addError?.data) setError("Something went wrong. Please, give a refresh and try again!!!")
        // console.log(addError)
    },[addError])

    useEffect(()=> {
          if(isSuccess) navigate('/admin/videos')
    },[isSuccess, navigate])
      
  return (
    <div className="mt-8 py-4 bg-primary h-screen place-items-center">
        <div className="mx-auto max-w-md md:max-w-lg px-5 lg:px-0">
            <div>
                <img className="h-12 mx-auto" src={LearningPortal} alt="" />            
                <h1 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                    Add New Video
                </h1>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit} >
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                        <label htmlFor="title" className="sr-only">Title here..</label>
                        <input id="title" name="title" type="text" required
                               value={title} onChange={(e)=> setTitle(e.target.value)}
                               className="video-form-input rounded-t-md" placeholder="Enter Video Title Here.." />
                    </div>
                    <div>
                        <label htmlFor="description" className="sr-only">Description here..</label>
                        <textarea id="description" name="description" type="text" required row="3"
                                  value={description} onChange={(e)=> setDescription(e.target.value)}
                                  className="video-form-input rounded-t-md" placeholder="Enter Video Description Here.." />
                    </div>
                    <div>
                        <label htmlFor="url" className="sr-only">URL here..</label>
                        <input id="url" name="url" type="text" required
                               value={url} onChange={(e)=> setUrl(e.target.value)}
                               className="video-form-input rounded-t-md" placeholder="Enter Video URL Here.." />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                        <label htmlFor="views" className="sr-only">Views here..</label>
                        <input id="views" name="views" type="text" required
                               value={views} onChange={(e)=> setViews(e.target.value)}
                               className="video-form-input rounded-t-md" placeholder="Enter Video Views Here.." />
                    </div>
                    <div className="relative">
                        <label htmlFor="duration" className="sr-only">Duration here..</label>
                        <input id="duration" name="duration" type="text" required
                               value={duration} onChange={(e)=> setDuration(e.target.value)}
                               className="video-form-input rounded-t-md" placeholder="Enter Video Duration Here.." />
                    </div>
                    </div>
    
                </div>

                <div>
                    <button type="submit" disabled={isLoading}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                        Add Video
                    </button>
                </div>

                {error !== "" && <Error message={error} />}
            </form>
        </div>
    </div>
  )
}

export default AddVideo