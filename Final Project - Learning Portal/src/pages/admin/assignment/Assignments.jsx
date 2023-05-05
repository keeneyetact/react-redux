import React from "react";
import { useNavigate } from "react-router-dom";
import AssignmentList from "../../../components/admin/assignment/AssignmentList";

const Assignments = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate("/admin/assignment/add");
  };
  return (
    <div>
      <div className="py-6 bg-primary">
        <div className="mx-auto max-w-full px-5 lg:px-20">
          <div className="px-3 py-20 bg-opacity-10">
            <div className="w-full flex">
              <button onClick={handleClick} className="btn ml-auto">
                Add Assignment
              </button>
            </div>
            <AssignmentList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
