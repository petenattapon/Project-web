import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
function About() {

  useEffect(() => {
    document.title = "TageTap | About"
  })

  return (
    <div>
      About
      <Link to='/'>Back to home</Link>
    </div>
  )
}

export default About