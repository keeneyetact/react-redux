import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Error from "../../../components/common/Error";
import {
  useEditVideoMutation,
  useAddVideoMutation,
} from "../../../features/videos/videosApi";

const VideoForm = ({ id, videoData }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");
  const [views, setViews] = useState("");
  const [duration, setDuration] = useState("");
  const [error, setError] = useState("");

  const [
    addVideo,
    { isLoading: addLoading, isSuccess: addSuccess, error: addError },
  ] = useAddVideoMutation();
  const [
    editVideo,
    { isLoading: editLoading, isSuccess: editSuccess, error: editError },
  ] = useEditVideoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    // decide where to hit in the server
    if (id) {
      editVideo({
        id,
        data: {
          title,
          description,
          url,
          views,
          duration,
        },
      });
    } else {
      addVideo({
        data: {
          title,
          description,
          url,
          views,
          duration,
          createdAt: new Date(),
        },
      });
    }
  };

  useEffect(() => {
    setTitle(videoData?.title);
    setDescription(videoData?.description);
    setUrl(videoData?.url);
    setViews(videoData?.views);
    setDuration(videoData?.duration);
  }, [videoData]);

  useEffect(() => {
    if (editError?.data)
      setError("Something went wrong. Please, give a refresh and try again!!!");
    if (addError?.data)
      setError("Something went wrong. Please, give a refresh and try again!!!");
  }, [addError, editError]);

  useEffect(() => {
    if (addSuccess) navigate("/admin/videos");
    if (editSuccess) navigate("/admin/videos");
  }, [addSuccess, editSuccess, navigate]);

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="title" className="sr-only">
            Title here..
          </label>
          <input
            id="title"
            name="title"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="video-form-input rounded-t-md"
            placeholder="Enter Video Title Here.."
          />
        </div>
        <div>
          <label htmlFor="description" className="sr-only">
            Description here..
          </label>
          <textarea
            id="description"
            name="description"
            type="text"
            required
            row="3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="video-form-input rounded-t-md"
            placeholder="Enter Video Description Here.."
          />
        </div>
        <div>
          <label htmlFor="url" className="sr-only">
            URL here..
          </label>
          <input
            id="url"
            name="url"
            type="text"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="video-form-input rounded-t-md"
            placeholder="Enter Your Embed URL (https://www.youtube.com/embed/your_link)"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative">
            <label htmlFor="views" className="sr-only">
              Views here..
            </label>
            <input
              id="views"
              name="views"
              type="text"
              required
              value={views}
              onChange={(e) => setViews(e.target.value)}
              className="video-form-input rounded-t-md"
              placeholder="Enter Views Like 0K"
            />
          </div>
          <div className="relative">
            <label htmlFor="duration" className="sr-only">
              Duration here..
            </label>
            <input
              id="duration"
              name="duration"
              type="text"
              required
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="video-form-input rounded-t-md"
              placeholder="Enter Duration (mm:ss) 00:00"
            />
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          disabled={addLoading || editLoading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
        >
          {id ? "Update" : "Add"} Video
        </button>
      </div>

      {error !== "" && <Error message={error} />}
    </form>
  );
};

export default VideoForm;
