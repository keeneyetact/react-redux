import React from 'react'
import { useNavigate } from 'react-router-dom'
import VideoList from '../../../components/admin/Video/VideoList'

const Videos = () => {
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault()
        navigate('/admin/videos/add')
    }
    
  return (
    <div>
        <div className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
            <div className="px-3 py-20 bg-opacity-10">
                <div className="w-full flex">
                    <button onClick={handleClick} className="btn ml-auto">Add Video</button>
                </div>
                <VideoList />
            </div>
        </div>
        </div>
    </div>
  )
}

export default Videos