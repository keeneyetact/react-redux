import React from "react";
import { useNavigate } from "react-router-dom";
import { useGetQuizzesQuery } from "../../../features/quizzes/quizzesApi";
import SingleQuiz from "./SingleQuiz";
import Loading from "../../common/Loading";
import Error from "../../common/Error";
import NoContent from "../../common/NoContent";

const QuizList = () => {
  const { data: quizData, isLoading, isError, error } = useGetQuizzesQuery();
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/admin/quizzes/add");
  };

  // decide what to render
  let content;

  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && !isError) {
    content = <Error message={error?.data || "Something Went Wrong..."} />;
  }

  if (!isLoading && !isError && quizData?.length === 0) {
    content = (
      <NoContent
        message={"No, Quiz Found...! To Add Quiz Click Add Quiz Button."}
      />
    );
  }

  if (!isLoading && !isError && quizData?.length > 0) {
    content = (
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
            {quizData &&
              quizData.map((quiz) => <SingleQuiz key={quiz.id} quiz={quiz} />)}
          </tbody>
        </table>
      </div>
    );
  }

  return (
    <div className="px-3 py-20 bg-opacity-10">
      <div className="w-full flex">
        <button onClick={handleClick} className="btn ml-auto">
          Add Quiz
        </button>
      </div>
      {content}
    </div>
  );
};

export default QuizList;
