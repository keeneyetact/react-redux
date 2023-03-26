import React from 'react'
import MyRank from '../components/leaderboard/MyRank'
import TopRank from '../components/leaderboard/TopRank'
import Navbar from '../components/Navbar'

const Leaderboard = () => {
  return (
    <div>
        <Navbar />
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