import React from 'react'
import Img from '../../utils/Img'

const TeamMember = ({team}) => {
  const imgLink = Img(team)
    const { name, avatar, id } = team || {}
  return (
    <div className="checkbox-container">
            <img src={imgLink} alt='' className="team-avater" />
            <p className="label">{name}</p>
    </div>
  )
}

export default TeamMember