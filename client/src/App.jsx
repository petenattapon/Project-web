import React, { useState } from 'react';
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
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

function App() {
  const [user, setLogin] = useState(null);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            user && user._id ? (
              <Home setLogin={setLogin} />
            ) : (
              <Login setLogin={setLogin} />
            )
          }
        />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/event" element={<Event />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/requests" element={<Request />} />
        <Route path="/edit" element={<EditProfile />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/editpage" element={<EditPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setLogin={setLogin} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
