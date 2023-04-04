import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetQuizByVideoQuery } from '../../features/quizzes/quizzesApi'

const QuizPage = () => {
    const { videoId } = useParams()
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const {data: quizData, isLoading} = useGetQuizByVideoQuery(videoId)
    const [answers, setAnswers] = useState([]);
    
    // const handleOptionChange = (e, optionId) => {
    //     const selectedOptionIds = answers[currentQuestion];
    //     console.log(selectedOptionIds)
    //     const optionIndex = selectedOptionIds?.indexOf(optionId);
      
    //     if (optionIndex > -1) {
    //       // The option was already selected, so remove it from the array
    //       selectedOptionIds?.splice(optionIndex, 1);
    //     } else {
    //       // The option was not already selected, so add it to the array
    //       selectedOptionIds?.push(optionId);
    //     }
      
    //     const newAnswers = [...answers];
    //     newAnswers[currentQuestion] = selectedOptionIds;
    //     setAnswers(newAnswers);
    //     console.log(answers)
    //   };

    const handleOptionChange = (option) => {
        const updatedAnswers = [...answers];
        const currentAnswers = updatedAnswers[currentQuestion] || []; // Get current answers for the active question
        const isOptionSelected = currentAnswers.includes(option.id); // Check if the option is already selected for the current question
      
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
      
    
    // const handleSubmit = () => {
    //     let idx = 0
    //   const correctAnswers = quizData.filter((quiz) => {
    //     const selectedAnswer = answers[idx];
    //     console.log(selectedAnswer)
    //     const correctOptions = quiz.options.filter((option) => option.isCorrect);
    //     const correctOptionIds = correctOptions.map((option) => option.id);
    //     idx++
    //     return correctOptionIds.every((optionId) => selectedAnswer?.includes(optionId));
    //   });
    //   console.log(correctAnswers)
  
    //   const marks = correctAnswers.length === quizData.length ? 1 : 0;
    //   alert(`You scored ${marks} out of 1`);
    // };
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
        alert(`You scored ${marks} out of ${quizData.length}`);
      }
      
    
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
          className={`inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 ${(currentQuestion === 0) ? '' : 'bg-white'} rounded-full border border-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer disabled:opacity-30`}>
            Previous
          </button>
          <button onClick={() => setCurrentQuestion(currentQuestion + 1)} 
          disabled={currentQuestion === quizData?.length - 1}
          className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500  rounded-full border border-gray-700 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer disabled:opacity-70">
            Next
          </button>
          {currentQuestion === quizData?.length - 1 && (
            <button onClick={handleSubmit}
            className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">Submit</button>
          )}
        </div>
      </div>  } </div> </div> </section> </div>
    );
  }
  

export default QuizPage