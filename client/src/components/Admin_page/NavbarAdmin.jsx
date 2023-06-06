import React, { useState } from 'react'
import { FiSearch, FiUser, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Modal from 'react-modal'
import { AiFillCloseCircle } from "react-icons/ai";
import '../../sass/LoginandRegis/NavAd.scss'
let logoName = 'Tage Tape.'

function NavbarAdmin() {
    const [modalOpen, setModalOpen] = useState(false)

    function handleClickOpenModal() {
        setModalOpen(true)
    }
    function handleClickCloseModal() {
        setModalOpen(false)
    }
    return (

        <header id='main-admin'>
            <div className="container">
                <div className="header-container-admin">
                    <div className="logo-container">
                        <Link to='/admin/productSchema' className='aaa'><h2>Admin page</h2></Link>
                    </div>
                    <div className="page-admin">
                        <Link to='/admin/productSchema' className='lAd'>Product</Link>
                        <Link to='/userSchema' className='lAd'>User</Link>
                    </div>
                    <div className="logout-admin">
                        <button>Logout</button>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default NavbarAdmin