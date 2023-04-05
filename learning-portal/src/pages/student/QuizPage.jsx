import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { useGetQuizByVideoQuery } from '../../features/quizzes/quizzesApi'
import { useSubmitQuizMutation } from '../../features/quizMark/quizMarkApi'
import Error from '../../components/common/Error'

const QuizPage = () => {
    const { videoId } = useParams()
    const navigate = useNavigate()
    const { user } = useSelector(state => state.auth)
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const {data: quizData, isLoading} = useGetQuizByVideoQuery(videoId)
    const [submitQuiz, {isSuccess, isLoading: submitLoading, error}] = useSubmitQuizMutation()

    const [answers, setAnswers] = useState([]);

    const handleOptionChange = (option) => {
        const updatedAnswers = [...answers];
        // Get current answers for the active question
        const currentAnswers = updatedAnswers[currentQuestion] || [];
        // Check if the option is already selected for the current question 
        const isOptionSelected = currentAnswers.includes(option.id); 
      
        if (isOptionSelected) {
          // Remove the option from the selected options
          const updatedSelectedOptions = currentAnswers.filter((selectedOption) => selectedOption !== option.id);
          updatedAnswers[currentQuestion] = updatedSelectedOptions;
        } else {
          // Add the option to the selected options
          updatedAnswers[currentQuestion] = [...currentAnswers, option.id];
        }
      
        setAnswers(updatedAnswers);
        console.log(answers)
      };
      
    

    const handleSubmit = (e) => {
        e.preventDefault()
        let marks = 0;
        let idx = 0;
        quizData.forEach((quiz) => {
          const selectedOptionIds = answers[idx];
          const correctOptions = quiz.options.filter((option) => option.isCorrect);
          const correctOptionIds = correctOptions.map((option) => option.id);
          idx++
          if (selectedOptionIds.length === correctOptionIds.length 
              && selectedOptionIds.every((optionId) => correctOptionIds.includes(optionId))) {
            marks += 1;
          }
        });
        // console.log(`You scored ${marks} out of ${quizData.length}`);
        const data = {
            student_id: user?.id,
            student_name: user?.name,
            video_id: Number(videoId),
            video_title: currentQuiz?.video_title,
            totalQuiz: quizData?.length,
            totalCorrect: marks,
            totalWrong: quizData?.length - marks,
            totalMark: quizData?.length * 5,
            mark: marks * 5,
        }
        // console.log(data)
        submitQuiz({data})
      }

      useEffect(()=>{
        if (isSuccess) navigate('/leaderboard')
      },[isSuccess])
      
    
const currentQuiz = quizData?.length ? quizData[currentQuestion] : [];
  
    return (
        <div> 
            <section className="py-6 bg-primary">
    <div className="mx-auto max-w-7xl px-5 lg:px-0">
      <div className="mb-8">
        <h1 className="text-2xl font-bold">Quizzes for {currentQuiz?.video_title}
        </h1>
        <p className="text-sm text-slate-200">Each question contains 5 Mark</p>
      </div>
      <div className="space-y-8 ">
            {!isLoading && <div className="quiz">
        <h1 className="question">{currentQuiz?.question}</h1>
        <div className="quizOptions">
          {currentQuiz?.options?.map((option) => (
            <label key={option.id}>
              <input
                type="checkbox"
                value={option.id}
                checked={answers[currentQuestion]?.includes(option.id)}
                onChange={() => handleOptionChange(option)}
              />
              {option.option}
            </label>
          ))}
        </div>
        <div className="text-center pb-6 mt-6">
          <button onClick={() => setCurrentQuestion(currentQuestion - 1)} 
          disabled={currentQuestion === 0}
          className={`inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 ${(currentQuestion === 0) ? 'disabled:opacity-30' : 'bg-white cursor-pointer'} rounded-full border border-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
            Previous
          </button>
          <button onClick={() => setCurrentQuestion(currentQuestion + 1)} 
          disabled={currentQuestion === quizData?.length - 1}
          className={`inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 ${(currentQuestion === quizData?.length - 1) ? 'disabled:opacity-30' : 'bg-white cursor-pointer'} rounded-full border border-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
            Next
          </button>
          {currentQuestion === quizData?.length - 1 && (
            <button onClick={handleSubmit} disabled={submitLoading}
            className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">Submit</button>
          )}
        </div>
      </div>  } 
      {error?.data && <Error message={error?.data} />}
      </div> </div> </section> 
      </div>
    );
  }
  

export default QuizPage