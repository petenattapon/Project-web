import React from 'react'
import '../sass/Page1/Navbar.scss'

function Navbar() {
  return (
    
    <nav id='main'>
        <header className="container">
            <div className="navbar-container">
                <ul>
                    <a href="#"><li>Home</li></a>
                    <a href="#"><li>Gallery</li></a>
                    <a href="#"><li>Events</li></a>
                    <a href="#"><li>About</li></a>
                    <a href="#"><li>Contact</li></a>
                </ul>
            </div>
        </header>
    </nav>

  )
}

export default Navbar