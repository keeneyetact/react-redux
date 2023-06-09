import React from 'react'
import { useState, useEffect } from 'react';
import { useGetVideosQuery } from '../../../features/videos/videosApi';
import { useAddQuizMutation, useEditQuizMutation } from '../../../features/quizzes/quizzesApi';
import { useNavigate } from 'react-router-dom';
import Error from '../../common/Error';

const QuizForm = ({ quizData }) => {
    const navigate = useNavigate()
    const { data: videoList} = useGetVideosQuery()
    const [ addQuiz, { isLoading: addLoading, isSuccess: addSuccess, error: addError} ] = useAddQuizMutation()
    const [ editQuiz, { isLoading: editLoading, isSuccess: editSuccess, error: editError} ] = useEditQuizMutation()

    const [ error, setError ] = useState('')
    const [ videoId, setVideoId ] = useState()
    const [ videoTitle, setVideoTitle ] = useState()
    const [question, setQuestion] = useState("");
    const [options, setOptions] = useState([
        { id: 1, option: '', isCorrect: false },
        { id: 2, option: '', isCorrect: false },
        { id: 3, option: '', isCorrect: false },
        { id: 4, option: '', isCorrect: false },
      ])

    useEffect(()=> {
        if(quizData?.id) {
        setQuestion(quizData?.question)
        setVideoId(quizData?.video_id)
        setVideoTitle(quizData?.video_title)
        setOptions(quizData?.options)
        }
    },[quizData])
    
    
    const handleQuestionChange = (e) => {
      setQuestion(e.target.value);
    };

const handleOptionChange = (e, optionId) => {
    const updatedOptions = options.map((option) => {
      if (option.id === optionId) {
        return { ...option, option: e.target.value };
      } else {
        return option;
      }
    });
    setOptions(updatedOptions);
  };

const handleCheckboxChange = (e) => {
    const updatedOptions = options.map((option) => {
      if (option.id === Number(e.target.name)) {
        return { ...option, isCorrect: e.target.checked };
      } else {
        return option;
      }
    });
    setOptions(updatedOptions);
  };

const handleSubmit = (e) => {
  e.preventDefault();
  const data = {
    question: question,
    options: options,
    video_id: Number(videoId),
    video_title: videoTitle
  };
  
  // decide where to hit in the server
  if (quizData) {
    editQuiz({id: quizData?.id, data})
  } else {
    addQuiz({data})
  }
};

useEffect(()=> {
    if(addError?.data || editError?.data) setError("Something went wrong. Please, give a refresh and try again!!!")
    // console.log(addError)
},[addError, editError])

useEffect(()=> {
      if(addSuccess || editSuccess) navigate('/admin/quizzes')
},[addSuccess, editSuccess, navigate])


  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-lg">
      <div className="my-4">
        <label htmlFor="question" className="font-semibold text-lg mb-2 block">Quiz Question</label>
        <input type="text" id="question" name="question" value={question} onChange={handleQuestionChange} className="video-form-input border rounded px-3 py-2 w-full focus:outline-none focus:border-blue-500" required />
      </div>
      <div className="my-4">
        <label htmlFor="options" className="font-semibold text-lg mb-2 block">Options</label>
        {options?.map((option) => (
        <div className="flex justify-center items-center w-full mb-2" key={option.id}>
          <input
            className="h-6 w-6 text-blue-600 "
            type="checkbox"
            name={option.id}
            checked={option.isCorrect}
            onChange={handleCheckboxChange}
          />
          <label className="ml-2 text-gray-700">Correct Answer?</label>
          <input
            className="video-form-input h-12 mr-2 rounded"
            type="text"
            id={`option-${option.id}`}
            name={option.id}
            value={option.option}
            onChange={(e) => handleOptionChange(e, option.id)}
            required
          />
        </div>
      ))}

        <div className='mt-4'>
            <label htmlFor="video" className="font-semibold text-lg mb-2 block">Assign Quiz to Video</label>
                        <select id="video" name="video" value={videoTitle} 
                                onChange={e => { setVideoTitle(e.target.value); setVideoId(e.target.options[e.target.selectedIndex].getAttribute('id')); }} 
                                className="video-form-input rounded" required>
                                <option value="" hidden selected>Select Video Here..</option>
                                { videoList && videoList?.map(v => <option key={v.id} value={v.title} id={v.id} >{v.title}</option>)}
                            </select>
                    </div>
      </div>
      <div className="my-4">
        <button disabled={addLoading || editLoading} type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
        {quizData ? 'Update Quiz' : 'Create Quiz'}
        </button>
      </div>
      {error !== "" && <Error message={error} />}
    </form>
  );


}

export default QuizForm