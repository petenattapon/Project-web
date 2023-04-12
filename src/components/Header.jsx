import React, { useState } from 'react'
import '../sass/Page1/Header.scss'
import '../sass/Page1/Modal.scss'
import { FiSearch, FiUser, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Modal from 'react-modal'

let logoName = 'Tage Tape.'

function Header() {
    const [modalOpen, setModalOpen] = useState(false)

    function handleClickOpenModal() {
        setModalOpen(true)
    }
    function handleClickCloseModal() {
        setModalOpen(false)
    }
    return (

        <header id='main'>
            <div className="container">
                <div className="header-container">
                    <div className="logo-container">
                        <Link to='/'><h1>{logoName}</h1></Link>

                    </div>
                    <div className="icon-container">
                        <Link id='Link' onClick={handleClickOpenModal}>
                            <FiUser className='Fi' />
                        </Link>
                        <Modal
                            isOpen={modalOpen}
                            onRequestClose={handleClickCloseModal}
                            contentLabel="Example Modal"
                            className="modal"
                        >
                            <button onClick={handleClickCloseModal}><FiX /></button>
                        </Modal>
                        <Link to='/gallery' id='Link'>
                            <FiSearch className='Fi' />
                        </Link>
                    </div>
                </div>
            </div>
        </header>

    )
}

export default Header