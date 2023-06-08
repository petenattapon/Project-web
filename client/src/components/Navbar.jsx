import React from 'react'
import '../sass/Page1/Navbar.scss'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    
    <nav id='main'>
        <header className="container">
            <div className="navbar-container">
                <ul>
                  <Link to="/" id='Link'><li>Home</li></Link>
                  <Link to="/gallery" id='Link'><li>Gallery</li></Link> 
                  <Link to="/collect" id='Link'><li>Collection</li></Link>
                  {/* <Link to="/about" id='Link'><li>About</li></Link>
                  <Link to="/contact" id='Link'><li>Contact</li></Link> */}
                </ul>
            </div>
        </header>
    </nav>

  )
}

export default Navbar