import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LearningPortal from "../../../assets/image/learningportal.svg";
import Error from "../../common/Error";
import {
  useAddAssignmentMutation,
  useEditAssignmentsMutation,
  useGetAssignmentsQuery,
} from "../../../features/assignments/assignmentsApi";
import { useGetVideosQuery } from "../../../features/videos/videosApi";

const AssignmentForm = ({id, currentAssignment}) => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [totalMark, setTotalMark] = useState()
    const [videoTitle, setVideoTitle] = useState()
    const [videoId, setVideoId] = useState()
    const [error, setError] = useState('')

    const { data: videoList } = useGetVideosQuery();
    const { data: assignmentList } = useGetAssignmentsQuery();
    const [addAssignment, { isLoading: addLoading, isSuccess: addSuccess, error: addError }] = useAddAssignmentMutation()
    const [editAssignment, { isLoading: editLoading, isSuccess: editSuccess, error: editError }] = useEditAssignmentsMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(id) {

        editAssignment({
            id,
            data: {
                title,
                totalMark,
                video_id: videoId,
                video_title: videoTitle,
            },
        });
    } else {
        addAssignment({
            data: {
                title,
                totalMark,
                video_id: videoId,
                video_title: videoTitle
            }
        })
    }
  };

  useEffect(() => {
    setTitle(currentAssignment?.title);
    setTotalMark(currentAssignment?.totalMark);
    setVideoId(currentAssignment?.video_id);
    setVideoTitle(currentAssignment?.video_title);
    setError('')
  }, [currentAssignment]);

  useEffect(() => {
    if (addError?.data || editError?.data)
      setError("Something went wrong. Please, give a refresh and try again!!!");
  }, [addError, editError]);

  useEffect(() => {
    if (addSuccess || editSuccess) navigate("/admin/assignments");
  }, [addSuccess, editSuccess, navigate]);

  // filtering those video where assignment already exists
  const filteredVideos = videoList?.filter((video) => {
    // Keep the video with this aasignment if it is on edit page
    if (id && video.id == currentAssignment?.video_id) {
      return true;
    }
    // Exclude the videos with ids that are in the assignments list
    if (assignmentList?.some((assignment) => assignment.video_id == video.id)) {
      return false;
    }
    return true;
  });


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
                placeholder="Enter Assignment Title Here.."
              />
            </div>
            <div>
              <label htmlFor="video" className="sr-only">
                Assignment Video here..
              </label>
              <select
                id="video"
                name="video"
                value={videoTitle}
                onChange={(e) => {
                  setVideoTitle(e.target.value);
                  setVideoId(
                    e.target.options[e.target.selectedIndex].getAttribute("id")
                  );
                }}
                className="video-form-input rounded-t-md"
                required
              >
                <option value="" hidden selected>
                  Select Video For Assignment Here..
                </option>
                {filteredVideos &&
                  filteredVideos?.map((v) => (
                    <option key={v.id} value={v.title} id={v.id}>
                      {v.title}
                    </option>
                  ))}
              </select>
            </div>
            <div>
              <label htmlFor="totalMark" className="sr-only">
                Mark here..
              </label>
              <input
                id="totalMark"
                name="totalMark"
                type="number"
                required
                value={totalMark}
                onChange={(e) => setTotalMark(e.target.value)}
                className="video-form-input rounded-t-md"
                placeholder="Enter Assignment Mark Here.."
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={addLoading || editLoading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
            >
              {id ? 'Update' : 'Add' } Assignment
            </button>
          </div>

          {error !== "" && <Error message={error} />}
        </form>
  )
}

export default AssignmentForm