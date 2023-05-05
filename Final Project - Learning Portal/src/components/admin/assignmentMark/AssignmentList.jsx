import React from "react";
import { useGetAssignmentMarkQuery } from "../../../features/assignmentMark/assignmentMarkApi";
import SingleAssignment from "./SingleAssignment";

const AssignmentList = () => {
  const { data, refetch } = useGetAssignmentMarkQuery();
  return (
    <div className="px-3 py-20 bg-opacity-10">
      <ul className="assignment-status">
        <li>
          <button onClick={() => refetch()}>Refetch List</button>
        </li>
        <li>
          Total <span>{data?.length}</span>
        </li>
        <li>
          Pending{" "}
          <span>
            {data?.filter((item) => item.status === "pending")?.length}
          </span>
        </li>
        <li>
          Mark Sent{" "}
          <span>
            {data?.filter((item) => item.status === "published")?.length}
          </span>
        </li>
      </ul>
      <div className="overflow-x-auto mt-4">
        <table className="divide-y-1 text-base divide-gray-600 w-full">
          <thead>
            <tr>
              <th className="table-th">Assignment</th>
              <th className="table-th">Date</th>
              <th className="table-th">Student Name</th>
              <th className="table-th">Repo Link</th>
              <th className="table-th">Mark</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-slate-600/50">
            {data &&
              data.map((assignment) => (
                <SingleAssignment key={assignment.id} assignment={assignment} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignmentList;
