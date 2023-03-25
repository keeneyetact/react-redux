import React from 'react'
import { useGetTeamQuery } from '../../features/api/apiSlice'
import TeamMember from './TeamMember'

const TeamList = () => {
  const { data, isError, isLoading } = useGetTeamQuery()

  return (
    <div className="mt-8">
        <h3 className="text-xl font-bold">Team Members</h3>
        <div className="mt-3 space-y-4">
         { data && data.map((team)=> <TeamMember team={team} key={team.id} />)}
        </div>
      </div>
  )
}

export default TeamList