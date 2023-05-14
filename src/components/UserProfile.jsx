import React, { useState } from 'react'
import '../sass/Page2/UserProfile.scss'
import { Link } from 'react-router-dom'
import Modal from 'react-modal'

function UserProfile() {
    return (
        <main className="container">
            <section className="profile-container">
                <section className="header-profile">
                    <h2 className='userName'>Hello(username)</h2>
                    <figure>
                        <img src="https://i.pinimg.com/736x/8b/16/7a/8b167af653c2399dd93b952a48740620.jpg" alt="userImg" />
                    </figure>
                </section>
                <section className='mid-profile'>
                    <Link to='/profile' id='LinkPro1'><h3>My Profile</h3></Link>
                    <Link to='/requests' id='LinkPro2'><h3>Request item to admin</h3></Link>
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

                    {/* <div className="userLevel">
                        <button>User level: Newcomer</button>
                        <p>* Request 5 item to Amateur *</p>
                    </div> */}
                    <div className="btn-edit">
                        <Link to="/edit">
                            <button>Edit Profile</button>
                        </Link>

                    </div>
                    {/* <Link to='/requests' id='Link'>
                        <button>Request to admin</button>
                    </Link> */}
                </section>
            </section>
        </main>
    )
}




export default UserProfile