import React, {useState} from 'react'

const QuizList = ({quiz}) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (optionId) => {
    if (selectedOptions.includes(Number(optionId))) {
      setSelectedOptions(selectedOptions.filter((id) => Number(id) !== Number(optionId)));
    } else {
      setSelectedOptions([...selectedOptions, Number(optionId)]);
    }

    const correctOptions = quiz.options.filter((option) => option.isCorrect).map((option) => Number(option.id));
    const incorrectOptions = selectedOptions.filter((id) => !correctOptions.includes(Number(id)));
    const isCorrect = incorrectOptions.length === 0;
    console.log(incorrectOptions, isCorrect)
    const mark = isCorrect ? 5 : 0;
    console.log(mark)
  };
  

  return (
    <div className="quiz">
          <h4 className="question">{quiz?.question}</h4>
          <form className="quizOptions">
            {/* <!-- Option 1 --> */}
            <label htmlFor={`option1_q${quiz?.id}`}>
              <input type="checkbox" id={`option1_q${quiz?.id}`} 
                    checked={selectedOptions.includes(quiz.options[0]?.id)} onChange={() => handleOptionSelect(quiz.options[0]?.id)}
              />
              {quiz.options[0]?.option}
            </label>

            {/* <!-- Option 2 --> */}
            <label htmlFor={`option2_q${quiz?.id}`}>
              <input type="checkbox" id={`option2_q${quiz?.id}`} 
                    checked={selectedOptions.includes(quiz.options[1]?.id)} onChange={() => handleOptionSelect(quiz.options[1]?.id)}
              />
              {quiz.options[1]?.option}
            </label>

            {/* <!-- Option 3 --> */}
            <label htmlFor={`option3_q${quiz?.id}`}>
              <input type="checkbox" id={`option3_q${quiz?.id}`} 
                    checked={selectedOptions.includes(quiz.options[2]?.id)} onChange={() => handleOptionSelect(quiz.options[2]?.id)}
              />
              {quiz.options[2]?.option}
            </label>

            {/* <!-- Option 4 --> */}
            <label htmlFor={`option4_q${quiz?.id}`}>
              <input type="checkbox" id={`option4_q${quiz?.id}`} 
                    checked={selectedOptions.includes(quiz.options[3]?.id)} onChange={() => handleOptionSelect(quiz.options[3]?.id)}
              />
              {quiz.options[3]?.option}
            </label>
          </form>
        </div>
  )
}

export default QuizList