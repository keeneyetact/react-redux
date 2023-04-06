import React from 'react'
import {  useParams } from 'react-router-dom'
import VideoForm from '../../../components/admin/Video/VideoForm'
import LearningPortal from '../../../assets/image/learningportal.svg'
import Error from '../../../components/common/Error'
import Loading from '../../../components/common/Loading'
import NoContent from '../../../components/common/NoContent'
import { useGetVideoQuery } from '../../../features/videos/videosApi'

const EditVideo = () => {

    const { id } = useParams()
    const { data: videoData, isLoading, isError } = useGetVideoQuery(id)

    // decide what to render
    let content;

    if(isLoading) {
        content = <Loading />;
    }

    if(!isLoading && isError) {
        content = <Error message={'Something Went Wrong... Please, Try Again Later...!'} />;
    }

    if(!isLoading && isError && !videoData?.id ) {
        content = <NoContent message={'The Video your trying to edit is not currently available...!'} />
    }

    if(!isLoading && !isError && videoData?.id ) {
        content = (
            <VideoForm videoData={videoData} id={id} />
        )
    }

  return (
    <div className="mt-8 py-4 bg-primary h-screen place-items-center">
    <div className="mx-auto max-w-md md:max-w-lg px-5 lg:px-0">
        <div>
            <img className="h-12 mx-auto" src={LearningPortal} alt="" />            
            <h1 className="mt-6 mb-6 text-center text-3xl font-extrabold text-slate-100">
                Edit Video
            </h1>
        </div>
        {content}
    </div>
</div>
  )
}

export default EditVideo