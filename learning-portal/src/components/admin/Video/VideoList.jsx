import React from "react";
import { useGetVideosQuery } from "../../../features/videos/videosApi";
import SingleVideo from "./SingleVideo";
import Error from "../../../components/common/Error";
import Loading from "../../../components/common/Loading";
import NoContent from "../../../components/common/NoContent";

const VideoList = () => {
  const { data, isError, isLoading } = useGetVideosQuery();

  // decide what to render
  let content = null;

  if (isLoading) {
    content = <Loading />;
  }

  if (!isLoading && isError) {
    content = (
      <Error message={"Something Went Wrong... Please, Refresh The Page!!!"} />
    );
  }

  if (!isLoading && !isError && data?.length === 0) {
    content = (
      <NoContent
        message={"No Video Found... To Add Video Click Add Video Button...!!!"}
      />
    );
  }

  if (!isLoading && !isError && data?.length > 0) {
    content = (
      <table className="divide-y-1 text-base divide-gray-600 w-full">
        <thead>
          <tr>
            <th className="table-th">Video Title</th>
            <th className="table-th">Description</th>
            <th className="table-th">Action</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-600/50">
          {data &&
            data.map((video) => <SingleVideo key={video.id} video={video} />)}
        </tbody>
      </table>
    );
  }

  return <div className="overflow-x-auto mt-4">{content}</div>;
};

export default VideoList;
