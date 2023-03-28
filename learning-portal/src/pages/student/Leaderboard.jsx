import React from 'react'
import MyRank from '../../components/student/leaderboard/MyRank'
import TopRank from '../../components/student/leaderboard/TopRank'

const Leaderboard = () => {
  return (
    <div>
        <div className="py-6 bg-primary">
        <div className="mx-auto max-w-7xl px-5 lg:px-0">
            <MyRank />

            <TopRank />
        </div>
    </div>
    </div>
  )
}

export default Leaderboard