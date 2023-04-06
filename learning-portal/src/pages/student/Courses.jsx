import React from 'react'
import CourseVideo from '../../components/student/course/CourseVideo'
import CourseVideoList from '../../components/student/course/CourseVideoList'
import { useGetVideosQuery } from '../../features/videos/videosApi'
import Loading from '../../components/common/Loading'
import Error from '../../components/common/Error'
import NoContent from '../../components/common/NoContent'


const Courses = () => {
  const { data: videoList, isLoading, isError } = useGetVideosQuery()

  // decide what to render
  let content;

  if(isLoading) {
      content = <Loading />
  }

  if(!isLoading && isError) {
      content = <div className='mt-20'>
        <Error message={"Something Went Wrong"} />
        </div>
  }

  if(!isLoading && !isError && videoList?.length === 0){
      content= <NoContent message={"No Videos Found!"} />
  }

  if(!isLoading && !isError && videoList?.length > 0) {
      content= (
        <div className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
            <div className="grid grid-cols-3 gap-2 lg:gap-8">
              <CourseVideo /> 
              <CourseVideoList videoList={videoList} />
              
            </div>
        </div>
       </div>
      )
  }
  
  return (
    <div>
          {content}
    </div>
  )
}

export default Courses