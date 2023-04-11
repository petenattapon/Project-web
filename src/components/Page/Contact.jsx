import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
function Contact() {

useEffect(() => {
  document.title = "TageTap | Contact"
})

  return (
    <div>
      Contact
      <Link to='/'>Back to home</Link>
      </div>
  )
}

export default Contact