import React from 'react'
import SingleAssignment from './SingleAssignment'

const AssignmentList = () => {
  return (
    <div className="px-3 py-20 bg-opacity-10">
                <ul className="assignment-status">
                    <li>Total <span>4</span></li>
                    <li>Pending <span>3</span></li>
                    <li>Mark Sent <span>1</span></li>
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
                           <SingleAssignment />
                           <SingleAssignment />
                           <SingleAssignment />
                           <SingleAssignment />
                            <tr>
                                <td className="table-td">Assignment 2 - Implement Best Practices</td>
                                <td className="table-td">10 Mar 2023 10:58:13 PM</td>
                                <td className="table-td">Akash Ahmed</td>
                                <td className="table-td">https://github.com/Learn-with-Sumit/assignment-1</td>
                                <td className="table-td">50</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
  )
}

export default AssignmentList