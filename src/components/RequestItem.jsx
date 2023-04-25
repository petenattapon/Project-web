import React from 'react'
import { Link } from 'react-router-dom'
function RequestItem() {
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

                <form action="#">
                    <div className="formLage">
                        <label>Name</label>
                        <input type="text" placeholder='Firstname' />
                        <input type="text" placeholder='Lastname' />
                    </div>
                    <div className="formSmall">
                        <label>Gender</label>
                        <select id="select-options">
                            <option value="">--Please choose a Gender--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="LGBTQ+">LGBTQ+</option>
                        </select>
                        <label>Tel</label>
                        <input type="number" placeholder='Lastname' />
                    </div>
                    <div className="formLage">
                        <label>Email</label>
                        <input type="email" placeholder='Email' />
                        <label>Address</label>
                        <input type="text" placeholder='Address' />
                    </div>
                    <div className="formSmall">
                        <label>Gender</label>
                        <select id="select-options">
                            <option value="">--Please choose a Gender--</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="LGBTQ+">LGBTQ+</option>
                        </select>
                        <label>Tel</label>
                        <input type="number" placeholder='Lastname' />
                    </div>
                    <div className="formLage">
                        <label>Password</label>
                        <input type="password" placeholder='Password' />
                    </div>
                </form>
            </section>
        </main>
    )
}

export default RequestItem