import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
function Event() {

  useEffect(() => {
    document.title = "TageTape | Event"
  })

  return (
    <div>
      Event
      <Link to='/'>Back to home</Link>
      </div>
  )
}

export default Event