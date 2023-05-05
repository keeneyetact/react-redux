import React from "react";
import { useParams } from "react-router-dom";
import QuizForm from "../../../components/admin/quiz/QuizForm";
import LearningPortal from "../../../assets/image/learningportal.svg";
import { useGetQuizQuery } from "../../../features/quizzes/quizzesApi";
import NoContent from "../../../components/common/NoContent";
import Error from "../../../components/common/Error";
import Loading from "../../../components/common/Loading";

const AddQuiz = () => {
  const { quizId } = useParams();
  const { data: quizData, isLoading, isError } = useGetQuizQuery(quizId);

  // decide what to render
  let content;

  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && isError) {
    content = <Error message={"Something went wrong"} />;
  }

  if (!isLoading && isError && !quizData?.id) {
    content = (
      <NoContent
        message={"The Quiz your trying to edit is not currently available...!"}
      />
    );
  }

  if (!isLoading && !isError && quizData?.id) {
    content = <QuizForm quizData={quizData} />;
  }
  return (
    <div className="quiz mx-auto max-w-7xl px-5 lg:px-0">
      <div className="space-y-8 ">
        <div>
          <img className="h-12 mx-auto" src={LearningPortal} alt="" />
          <h1 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
            Edit Quiz
          </h1>
        </div>
        {content}
      </div>
    </div>
  );
};

export default AddQuiz;
