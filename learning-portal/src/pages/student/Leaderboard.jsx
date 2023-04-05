import React from 'react'
import MyRank from '../../components/student/leaderboard/MyRank'
import TopRank from '../../components/student/leaderboard/TopRank'
import { useGetAssignmentMarkQuery } from '../../features/assignmentMark/assignmentMarkApi'
import { useGetQuizMarkQuery } from '../../features/quizMark/quizMarkApi'
import RankList from '../../utils/RankList'
import StudentList from '../../utils/StudentList'

const Leaderboard = () => {
  const {data: assignmentMarkData} = useGetAssignmentMarkQuery()
  const {data: quizMarkData} = useGetQuizMarkQuery()

  let rank = [] ;

  rank = StudentList({assignmentMarkData, quizMarkData})
  
  rank = RankList(rank)
  
  return (
    <div>
        <div className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
            <MyRank rank={rank} />

            <TopRank rank={rank} />
        </div>
    </div>
    </div>
  )
}

export default Leaderboard