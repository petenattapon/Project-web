import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Page/Home';
import Gallery from './components/Page/Gallery';
import Event from './components/Page/Event';
import About from './components/Page/About';
import Contact from './components/Page/Contact';
import Profile from './components/Page/Profile';
import Product from './components/Page/Product';
import Request from './components/Page/Request';
import EditProfile from './components/Page/EditProfile';
import AdminPage from './components/Page/AdminPage';
import EditPage from './components/Page/EditPage';
import Register from './components/Login_Regis/Register';
import Login from './components/Login_Regis/Login';
import ShowData from './components/Admin_page/ShowData';
import ShowUserData from './components/Admin_page/ShowUserData';
function App() {
  const [user, setLogin] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('5'));
    if (storedUser && storedUser._id) {
      setLogin(storedUser);
    }
  }, []);

  const handleLogin = (userData) => {
    setLogin(userData);
    localStorage.setItem('5', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setLogin(null);
    localStorage.removeItem('5');
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={user && user._id ? <Home setLogin={handleLogout} /> : <Login setLogin={handleLogin} />}
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/event" element={<Event />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/requests" element={<Request />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/admin/productSchema" element={<AdminPage />} />
        <Route path="/editpage" element={<EditPage />} />
        <Route path="/register" element={<Register />} />
        <Route path='/userSchema' element={<ShowUserData />} />
        <Route path="/login" element={<Login setLogin={handleLogin} />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
