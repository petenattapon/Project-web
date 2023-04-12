import React, {useState} from 'react'
import '../sass/Page2/UserProfile.scss'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

function UserProfile() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    function handleOpenModal() {
        setIsModalOpen(true);
    }

    function handleCloseModal() {
        setIsModalOpen(false);
    }
    return (
        <main className="container">
            {/* <section className="profile-container">
                <section className="header-profile">
                    <h2 className='userName'>Hello(username)</h2>
                    <figure>
                        <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="userImg" />
                    </figure>
                </section>
                <section className='mid-profile'>
                    <Link to='/'><h3>My Profile</h3></Link>
                    <Link to='/'><h3>Request item to admin</h3></Link>
                </section>
                <hr style={{ width: '70%' }} />
                <section className='last-profile'>
                    <article className="details-profile">
                        <h3>Name :</h3>
                        <p>Nattapon Pongkao</p>
                    </article>
                    <article className="details-profile">
                        <h3>Email :</h3>
                        <p>nattaponpongkaop@gmail.com</p>
                    </article>
                    <article className="details-profile">
                        <h3>Tel :</h3>
                        <p>0929695414</p>
                    </article>
                    <article className="details-profile">
                        <h3>Gender :</h3>
                        <p>Male</p>
                    </article>
                    <article className="details-profile">
                        <h3>Address :</h3>
                        <p>-</p>
                    </article>

                    <div className="userLevel">
                        <button>User level: Newcomer</button>
                        <p>* Request 5 item to Amateur *</p>
                    </div>
                </section>
            </section> */}
            <div>
                <h1>Hello, World!</h1>
                <button onClick={handleOpenModal}>Open Modal</button>

                <Modal isOpen={isModalOpen} onRequestClose={handleCloseModal} contentLabel="Example Modal">
                    <h2>Modal Title</h2>
                    <p>Modal content goes here.</p>
                    <button onClick={handleCloseModal}>Close Modal</button>
                </Modal>
            </div>
        </main>
    )
}




export default UserProfile