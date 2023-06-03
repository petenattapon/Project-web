import React, { useState } from 'react'
import { FiSearch, FiUser, FiX } from "react-icons/fi";
import { Link } from 'react-router-dom';
import Modal from 'react-modal'
import { AiFillCloseCircle } from "react-icons/ai";

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
                            id='Modals'
                        >
                            <div className="close">
                                <AiFillCloseCircle onClick={handleClickCloseModal} className='closeIcon' />
                            </div>

                            <div className="edit-modal">
                                <h2>Welcome to Tage Tape.</h2>
                                <hr />
                            </div>

                            <form action="#" className='modal-form'>
                                <input type="text" placeholder='Enter username' />
                                <input type="password" placeholder='Enter password' />
                                <Link to='/profile' id='Link'>
                                    <button className='modalBtn-login'>Login</button>
                                </Link>
                            </form>
                            <h4 style={{ textAlign: 'center' }}>Or</h4>

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

export default NavbarAdmin