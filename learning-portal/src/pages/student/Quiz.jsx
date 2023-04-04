import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import QuizList from '../../components/student/quiz/QuizList'
import { useGetQuizByVideoQuery } from '../../features/quizzes/quizzesApi'

const Quiz = () => {
  const { videoId } = useParams()
  const [ answer, setAnswer ] = useState([{}])
  const [currrentQuestion, setCurrentQuestion] = useState(1)
  const [selectedOptions, setSelectedOptions] = useState([]);
  const {data: quizData} = useGetQuizByVideoQuery(videoId)
  // console.log(quizData)

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Perform any necessary actions with the mark here.
  };
  const [marks, setMarks] = useState(0)

  const handleOptionSelect = (option) => {
    // console.log(optionId)
    // if (selectedOptions.includes(Number(optionId))) {
    //   setSelectedOptions(selectedOptions.filter((id) => Number(id) !== Number(optionId)));
    // } else {
    //   setSelectedOptions([...selectedOptions, Number(optionId)]);
    // }

    // const correctOptions = quizData[currrentQuestion-1].options.filter((option) => option.isCorrect).map((option) => Number(option.id));
    // const incorrectOptions = selectedOptions.filter((id) => !correctOptions.includes(Number(id)));
    // const isCorrect = incorrectOptions.length === 0;
    // console.log(correctOptions, incorrectOptions, isCorrect)
    // const mark = isCorrect ? 5 : 0;
    // console.log(selectedOptions, mark)
    setSelectedOptions((prevSelectedOptions) => {
      if (option.isCorrect) {
        return [option];
      } else {
        return [];
      }
    });
    const isCorrect = selectedOptions.length === 1 && selectedOptions[0].isCorrect;
    const mark = isCorrect ? 5 : 0;
    console.log('Mark:', mark);

    let totalMark = 0
    quizData[currrentQuestion-1].options.forEach(option => {
      if (option.isCorrect) {
        const optionId = `option${option.id}_q${quizData[currrentQuestion-1].id}`
        const optionCheckbox = document.getElementById(optionId)
        if (optionCheckbox.checked) {
          totalMark += 1
        }
      }
    })
    setMarks(totalMark)
    console.log('total marks', marks)
  };

  return (
    <div>
        <section class="py-6 bg-primary">
    <div class="mx-auto max-w-7xl px-5 lg:px-0">
      <div class="mb-8">
        <h1 class="text-2xl font-bold">Quizzes for "test"
        </h1>
        <p class="text-sm text-slate-200">Each question contains 5 Mark</p>
      </div>
      <div class="space-y-8 ">
        {/* {quizData && quizData.map((quiz) =>  <QuizList key={quiz.id} quiz={quiz} /> )} */}

        { quizData?.length &&
          <div className="quiz">
          <h4 className="question">{quizData[currrentQuestion-1]?.question}</h4>
          <form className="quizOptions">
            {quizData[currrentQuestion-1].options.map((option)=> {
             return <label key={option.id} htmlFor={`option${option?.id}_q${quizData[currrentQuestion-1]?.id}`}>
              <input type="checkbox" id={`option${option?.id}_q${quizData[currrentQuestion-1]?.id}`} 
                    checked={selectedOptions.includes(option?.id)} onChange={() => {handleOptionSelect(option?.id); console.log(option)}}
              />
              {option?.option}
            </label>
            })}
            </form>
            </div>
        }
      </div>
      { quizData?.length &&
      <div className='text-center pb-6 mt-6'>
                              <button onClick={() => {setCurrentQuestion(prev=>prev-1)}} 
                              disabled={quizData[currrentQuestion - 1] === quizData[0]} 
                              className="inline-flex items-center py-2 px-4 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer disabled:opacity-30">
                                Back
                              </button>
                              <button onClick={() => {setCurrentQuestion(prev=>prev+1)}} disabled={!quizData[currrentQuestion]} 
                              className="inline-flex items-center py-2 px-4 ml-3 text-sm font-medium text-gray-500 bg-white rounded-full border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer disabled:opacity-30">
                                Next
                              </button>
      </div>
    }
      <button onClick={handleSubmit}
        class="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">Submit</button>
    </div>
  </section>
    </div>
  )
}

export default Quiz