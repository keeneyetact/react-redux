import React, { useState, useEffect } from 'react'
import moment from 'moment';
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useGetQuizzesQuery } from '../../../features/quizzes/quizzesApi';
import { useGetAssignmentsQuery } from '../../../features/assignments/assignmentsApi';
import AssignmentModal from './AssignmentModal';
import { useFindAssignmentQuery } from '../../../features/assignmentMark/assignmentMarkApi';

const CourseVideo = () => {
    const navigate = useNavigate()
    const { user } = useSelector(state => state.auth)
    const { data: quizList } = useGetQuizzesQuery()
    const { data: assignmentList } = useGetAssignmentsQuery()
    
    const [opened, setOpened] = useState(false);

    const controlModal = () => {
        setOpened((prevState) => !prevState);
    };

    const [quiz, setQuiz] = useState()
    const [assignment, setAssignment] = useState()

    const {video} = useSelector(state => state.video)
    const { id, title, description, url, createdAt } = video || {};
    console.log(assignment)

    useEffect(()=> {
        setQuiz(quizList?.find(q=> q.video_id === id))
        setAssignment(assignmentList?.find(a=> a.video_id === id))
    },[id])

    // console.log(quiz, assignment)

    const {data} = useFindAssignmentQuery({stdId: user?.id, assignmentId: assignment?.id})


    const handleQuiz = (e) => {
        e.preventDefault()
        navigate(`/quiz/${id}`)
    }

  return (
    <div className="col-span-full w-full space-y-8 lg:col-span-2">
                    <iframe width="100%" className="aspect-video" src={url}
                        title={title}
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen></iframe>

                    <div>
                        <h1 className="text-lg font-semibold tracking-tight text-slate-100">
                            {title}
                        </h1>
                        <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
                            Uploaded on {moment(createdAt).format('DD MMMM YYYY')}</h2>

                        <div className="flex gap-4">
                            <button onClick={controlModal} disabled={data?.id || !assignment}
                                className={`px-3 font-bold py-1 border ${data?.id ? 'bg-violet-600 border-violet' : (! assignment ? 'bg-red-200' : 'cursor-pointer text-cyan border-cyan hover:bg-cyan hover:text-primary')} rounded-full text-sm`}>
                            {data?.id ?  'এসাইনমেন্ট জমা দিয়েছেন' : (!assignment ? 'এসাইনমেন্ট নেই' : 'এসাইনমেন্ট জমা দিন')}
                            </button>

                            <button onClick={handleQuiz} disabled={!quiz}
                                className={`px-3 font-bold py-1 border ${quiz ? 'border-cyan text-cyan hover:bg-cyan hover:text-primary' : 'bg-red-200 border-red'} rounded-full text-sm `}>
                               {quiz ? 'কুইজে অংশগ্রহণ করুন' : 'কুইজ নেই'}
                            </button>
                        </div>
                        <p className="mt-4 text-sm text-slate-400 leading-6">
                            {description}
                        </p>


                    </div>
                    <AssignmentModal open={opened} control={controlModal} assignment={assignment} />
                </div>
  )
}

export default CourseVideo