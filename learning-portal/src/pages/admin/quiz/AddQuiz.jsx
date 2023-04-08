import React from "react";
import QuizForm from "../../../components/admin/quiz/QuizForm";
import LearningPortal from "../../../assets/image/learningportal.svg";

const AddQuiz = () => {
  return (
    <div className="quiz mx-auto max-w-7xl px-5 lg:px-0">
      <div className="space-y-8 ">
        <div>
          <img className="h-12 mx-auto" src={LearningPortal} alt="" />
          <h1 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
            Add New Quiz
          </h1>
        </div>
        <QuizForm />
      </div>
    </div>
  );
};

export default AddQuiz;
