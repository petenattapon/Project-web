import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../Header';
import Navbar from '../Navbar';
import UserProfile from '../UserProfile';
function Profile() {
  return (
    <header>
        <Header />
        <Navbar />
        <UserProfile />
    </header>
  )
}

export default Profile