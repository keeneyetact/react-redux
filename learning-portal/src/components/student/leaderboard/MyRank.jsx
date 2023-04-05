import React from 'react'
import { useSelector } from 'react-redux'

const MyRank = ({rank}) => {
    const { user } = useSelector(state => state.auth)
    const myRank = rank?.find(r => r.student_id == user?.id)
    
  return (
    <div>
                <h3 className="text-lg font-bold">Your Position in Leaderboard</h3>
                {myRank ?
                <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
                    <thead>
                        <tr>
                            <th className="table-th !text-center">Rank</th>
                            <th className="table-th !text-center">Name</th>
                            <th className="table-th !text-center">Quiz Mark</th>
                            <th className="table-th !text-center">Assignment Mark</th>
                            <th className="table-th !text-center">Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="border-2 border-cyan">
                            <td className="table-td text-center font-bold">{myRank?.rank}</td>
                            <td className="table-td text-center font-bold">{myRank?.student_name}</td>
                            <td className="table-td text-center font-bold">{myRank?.quizMark}</td>
                            <td className="table-td text-center font-bold">{myRank?.assignmentMark}</td>
                            <td className="table-td text-center font-bold">{myRank?.totalMark}</td>
                        </tr>
                    </tbody>
                </table>
                : 
                <p className='text-base w-full border border-slate-600/50 rounded-md my-4 table-th !text-center' > 
                    Please Submit Any Quiz or Assignment To Get Into The Leaderboard!
                </p>}
    </div>
  )
}

export default MyRank