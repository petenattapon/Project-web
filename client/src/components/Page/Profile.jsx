import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../sass/Page2/UserProfile.scss'
import '../../sass/Page1/Header.scss'
import Header from '../Header';
import Navbar from '../Navbar';

function Profile() {
  const location = useLocation();
  const [userProfile, setUserProfile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUserProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (location.state?.userProfile) {
      setUserProfile(location.state.userProfile);
      localStorage.setItem('userProfile', JSON.stringify(location.state.userProfile));
    } else if (storedUserProfile) {
      setUserProfile(storedUserProfile);
    } else {
      // Redirect to Home if userProfile is not available
      navigate('/');
    }
  }, [location.state, navigate]);

  return (
    <>
      <Header />
      <Navbar />
      <main className="container">
        <section className="profile-container">
          <section className="header-profile">
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
            {userProfile && (
              <>
                <article className="details-profile">
                  <h3>Name :</h3>
                  <p>{userProfile.firstname} {userProfile.lastname}</p>
                </article>
                <article className="details-profile">
                  <h3>Email :</h3>
                  <p>{userProfile.email}</p>
                </article>
                <div className="btn-edit">
                  <Link to="/edit">
                    <button>Edit Profile</button>
                  </Link>
                  <button onClick={() => navigate('/')}>Home</button>
                </div>
              </>
            )}
          </section>
        </section>
      </main>
    </>
  );
}

export default Profile;


