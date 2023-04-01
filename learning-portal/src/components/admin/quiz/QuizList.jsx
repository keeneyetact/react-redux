import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetQuizzesQuery } from '../../../features/quizzes/quizzesApi'
import SingleQuiz from './SingleQuiz'

const QuizList = () => {
    const {data} = useGetQuizzesQuery()
    const navigate = useNavigate()

    const handleClick = (e) => {
        e.preventDefault();
        navigate('/admin/quizzes/add')
    }
  return (
    <div className="px-3 py-20 bg-opacity-10">
                <div className="w-full flex">
                    <button onClick={handleClick} className="btn ml-auto">Add Quiz</button>
                </div>
                <div className="overflow-x-auto mt-4">
                    <table className="divide-y-1 text-base divide-gray-600 w-full">
                        <thead>
                            <tr>
                                <th className="table-th">Question</th>
                                <th className="table-th">Video</th>
                                <th className="table-th justify-center">Action</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-slate-600/50">
                            
                            {data && data.map(d => <SingleQuiz key={d.id} quiz={d} /> )}
                            
                        </tbody>
                    </table>
                </div>
            </div>
  )
}

export default QuizList