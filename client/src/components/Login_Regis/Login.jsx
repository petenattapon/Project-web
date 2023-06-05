import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login({ setLogin }) {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    const user = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:4000/login/user', user);
      console.log(response.data);
      setLogin(response.data.user);
      navigate('/');
    } catch (error) {
      console.log(error);
    }

    console.log('Submit Success......');
    console.log(email);
    console.log(password);

    setEmail('');
    setPassword('');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div className="s" style={{ margin: '0 auto', textAlign: 'center' }}>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={handleChange}
          />
          <br />
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={handleChange}
          />
          <br />
          <button type="submit">Login</button>
        </form>
        <p>or</p>
        <Link to="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;
