import React from 'react'
import MyRank from '../../components/student/leaderboard/MyRank'
import TopRank from '../../components/student/leaderboard/TopRank'
import { useGetAssignmentMarkQuery } from '../../features/assignmentMark/assignmentMarkApi'
import { useGetQuizMarkQuery } from '../../features/quizMark/quizMarkApi'
import RankList from '../../utils/RankList'
import StudentList from '../../utils/StudentList'
import Loading from '../../components/common/Loading'
import Error from '../../components/common/Error'
import NoContent from '../../components/common/NoContent'

const Leaderboard = () => {
  const {data: assignmentMarkData, isLoading: assignmentLoading, error: assignmentError} = useGetAssignmentMarkQuery({ count: 5 },{ refetchOnMountOrArgChange: true })
  const {data: quizMarkData, isLoading: quizLoading, error: quizError } = useGetQuizMarkQuery({ count: 5 },{ refetchOnMountOrArgChange: true })

  let rank = [] ;

  rank = StudentList({assignmentMarkData, quizMarkData})
  
  rank = RankList(rank)

  // decide what to render
  let content;

  if(assignmentLoading || quizLoading) {
    content = <Loading />
  }

  if(!assignmentLoading && !quizLoading && (assignmentError || quizError)){
    content = <Error message={"Something Went Wrong"} />
  }

  if(!assignmentLoading && !quizLoading && !assignmentError && !quizError && rank?.length !== 0) {
    content= <NoContent message={"No Student Rank List Found!!"} />
  }

  if(!assignmentLoading && !quizLoading && !assignmentError && !quizError && rank?.length > 0){
    content= (
      <>
        <MyRank rank={rank} />
        <TopRank rank={rank} />
      </>
    )
  }

  
  return (
    <div>
        <div className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
            {content}
        </div>
        </div>
    </div>
  )
}

export default Leaderboard