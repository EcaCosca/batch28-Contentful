import React from 'react'
import { useParams } from 'react-router-dom'

function Params() {
    const { user } = useParams()

  return (
    <div>Params: {user}</div>
  )
}

export default Params