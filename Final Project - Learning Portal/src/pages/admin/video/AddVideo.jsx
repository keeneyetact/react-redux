import React from "react";
import VideoForm from "../../../components/admin/Video/VideoForm";
import LearningPortal from "../../../assets/image/learningportal.svg";

const AddVideo = () => {
  return (
    <div className="mt-8 py-4 bg-primary h-screen place-items-center">
      <div className="mx-auto max-w-md md:max-w-lg px-5 lg:px-0">
        <div>
          <img className="h-12 mx-auto" src={LearningPortal} alt="" />
          <h1 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
            Add New Video
          </h1>
        </div>
        <VideoForm />
      </div>
    </div>
  );
};

export default AddVideo;
