import React from 'react'

const TopRank = ({rank}) => {
    rank = rank?.slice(0,20)
  return (
    <div className="my-8">
                <h3 className="text-lg font-bold">Top 20 Result</h3>
                <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
                    <thead>
                        <tr className="border-b border-slate-600/50">
                            <th className="table-th !text-center">Rank</th>
                            <th className="table-th !text-center">Name</th>
                            <th className="table-th !text-center">Quiz Mark</th>
                            <th className="table-th !text-center">Assignment Mark</th>
                            <th className="table-th !text-center">Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {rank && rank.map((r) => <tr key={r.student_id} className="border-b border-slate-600/50">
                            <td className="table-td text-center">{r?.rank}</td>
                            <td className="table-td text-center">{r?.student_name}</td>
                            <td className="table-td text-center">{r?.quizMark}</td>
                            <td className="table-td text-center">{r?.assignmentMark}</td>
                            <td className="table-td text-center">{r?.totalMark}</td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
  )
}

export default TopRank