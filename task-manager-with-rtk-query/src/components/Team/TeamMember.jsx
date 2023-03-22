import React from 'react'

const TeamMember = ({team}) => {
    const { name, avatar, id } = team || {}
  return (
    <div className="checkbox-container">
            <img src={avatar} alt='' className="team-avater" />
            <p className="label">{name}</p>
    </div>
  )
}

export default TeamMember