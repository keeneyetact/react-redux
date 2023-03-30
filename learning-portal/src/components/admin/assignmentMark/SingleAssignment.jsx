import React, { useState, useEffect } from 'react'; 
import moment from 'moment'
import { useMarkAssignmentMutation } from '../../../features/assignmentMark/assignmentMarkApi';

const SingleAssignment = ({assignment}) => {
    const {id, title, createdAt, student_name, repo_link, status, mark, totalMark} = assignment || {};
    const [markAssignment] = useMarkAssignmentMutation()
    const [givenMark, setGivenMark] = useState()

    useEffect(()=> {
        setGivenMark(totalMark)
    },[totalMark])

    const handleMark = (e) => {
        e.preventDefault()
        markAssignment({
            id,
            data: {
                mark: Number(givenMark),
                status: 'published'
            }
        })
    }
  return (
    <tr>
    <td className="table-td">{title}</td>
    <td className="table-td">{moment(createdAt).format('DD MMM YYYY hh:mm:ss A')}</td>
    <td className="table-td">{student_name}</td>
    <td className="table-td">{repo_link}</td>
    {status === 'pending' && 
    <td className="table-td input-mark">
        <input type="number" max={totalMark} value={givenMark}
               onChange={e => setGivenMark(e.target.value)} />
        <svg onClick={handleMark} fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
            className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5" />
        </svg>
    </td>}
    {status !== 'pending' && <td className="table-td">{mark}</td>}
    </tr>
  )
}

export default SingleAssignment