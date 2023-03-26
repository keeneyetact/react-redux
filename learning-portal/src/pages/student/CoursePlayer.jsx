import React from 'react'
import CourseVideo from '../../components/student/course/CourseVideo'
import CourseVideoList from '../../components/student/course/CourseVideoList'
import Navbar from '../../components/student/Navbar'

const CoursePlayer = () => {
  return (
    <div>
        <Navbar />
        <section class="py-6 bg-primary">
        <div class="mx-auto max-w-7xl px-5 lg:px-0">
            <div class="grid grid-cols-3 gap-2 lg:gap-8">
                <CourseVideo /> 
                <CourseVideoList />
            </div>
        </div>
    </section>

    </div>
  )
}

export default CoursePlayer