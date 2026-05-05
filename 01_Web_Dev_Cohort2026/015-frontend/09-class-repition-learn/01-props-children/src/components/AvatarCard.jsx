
import React from 'react'

const AvatarCard = ({avatar, level= "Rookie" }) => {
  return (
    <div>
        <h2>This is avatars card component </h2>
        <p>{avatar.initials}</p>
        <p>{avatar.name}</p>
        <p>{avatar.role}</p>
        <p>Level: {level}</p>
    </div>
  )
}

export default AvatarCard







