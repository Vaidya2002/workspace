import React from 'react'

function Card({name='err', des="err in des"}) {
    // console.log(props.name)
    // console.log(name)
    return (
    <div>
      <h1 >{name}</h1>
      <p>{des}</p>
    </div>
  )
}

export default Card
