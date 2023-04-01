import React from 'react'
import { useParams } from 'react-router-dom'
import QuizForm from '../../components/admin/quiz/QuizForm'
import LearningPortal from '../../assets/image/learningportal.svg'
import { useGetQuizQuery } from '../../features/quizzes/quizzesApi'

const AddQuiz = () => {
    const { quizId } = useParams()
    const { data } = useGetQuizQuery(quizId)
  return (
    <div className="quiz mx-auto max-w-7xl px-5 lg:px-0">
    <div className="space-y-8 ">
             <div>
                <img className="h-12 mx-auto" src={LearningPortal} alt="" />            
                <h1 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                    Edit Quiz
                </h1>
            </div>
        <QuizForm quizData={data} />
    </div>
    </div>
  )
}

export default AddQuiz