import React from 'react'
import QuizList from '../../../components/admin/quiz/QuizList'

const Quizzes = () => {
  return (
    <div>
        <div className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
            <QuizList />
        </div>
    </div>
    </div>
  )
}

export default Quizzes