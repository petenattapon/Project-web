import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Page/Home';
import Gallery from './components/Page/Gallery';
import Event from './components/Page/Collect';
import About from './components/Page/About';
import Contact from './components/Page/Contact';
import Profile from './components/Page/Profile';
import Product from './components/Page/Product';
import Request from './components/Page/Request';
import Collect from './components/Page/Collect';
import EditProfile from './components/Page/EditProfile';
import AdminPage from './components/Page/AdminPage';
import EditPage from './components/Page/EditPage';
import Register from './components/Login_Regis/Register';
import Login from './components/Login_Regis/Login';
import ShowUserData from './components/Admin_page/ShowUserData';
import AddItems from './components/Admin_page/AddItems';


function App() {
  const [user, setLogin] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('1'));
    if (storedUser && storedUser._id) {
      setLogin(storedUser);
    }
  }, []);

  const handleLogin = (userData) => {
    setLogin(userData);
    localStorage.setItem('1', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setLogin(null);
    localStorage.removeItem('1');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user && user._id ? <Home setLogin={handleLogout} /> : <Login setLogin={handleLogin} />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/collect" element={<Collect />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/requests" element={<Request />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/admin/productSchema" element={<AdminPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userSchema" element={<ShowUserData />} />
        <Route path="/addItems" element={<AddItems />} />
        <Route path="/login" element={<Login setLogin={handleLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
