import React from 'react'
import '../sass/Page1/Header.scss'
import { FiSearch, FiUser} from "react-icons/fi";
import { Link } from 'react-router-dom';

let logoName = 'Tage Tape.'

function Header() {
  return (

    <header id='main'>
        <div className="container">
            <div className="header-container">
                <div className="logo-container">
                    <a href=""><h1>{logoName}</h1></a>
                </div>
                <div className="icon-container">
                    <FiUser className='Fi'/>
                    <Link to='/gallery' id='Link'><FiSearch className='Fi'/></Link>
                </div>
            </div>
        </div>
    </header>

  )
}

export default Header