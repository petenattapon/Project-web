// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link, useNavigate } from 'react-router-dom';

// function Login({ setLogin }) {
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const onSubmit = async (e) => {
//     e.preventDefault();

//     const user = {
//       email: email,
//       password: password,
//     };

//     try {
//       const response = await axios.post('http://localhost:4000/login/user', user);
//       console.log(response.data);
//       setLogin(response.data.user);

//       if (response.data.user.status === 'admin') {
//         navigate('/admin/productSchema');
//       } else {
//         const profileResponse = await axios.get(`http://localhost:4000/user/profile/${response.data.user.email}`);
//         const userProfile = profileResponse.data;
//         console.log(userProfile);
//         navigate('/', { state: { userProfile } });
//       }
//     } catch (error) {
//       console.log(error);
//       alert('Invalid email or password');
//     }

//     setEmail('');
//     setPassword('');
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'email') {
//       setEmail(value);
//     } else if (name === 'password') {
//       setPassword(value);
//     }
//   };

//   return (
//     <div className="container_form">
//       <div className="form-box">
//         <header>
//           <h1 className="title_login">Login</h1>
//           <p className="mid_login">Welcome to TageTape, Yah!!</p>
//         </header>
//         <div className="s" style={{ margin: '0 auto', textAlign: 'center' }}>
//           <form onSubmit={onSubmit}>
//             <input
//               type="email"
//               name="email"
//               value={email}
//               placeholder="Enter your email"
//               onChange={handleChange}
//             />
//             <br />
//             <input
//               type="password"
//               name="password"
//               value={password}
//               placeholder="Enter your password"
//               onChange={handleChange}
//             />
//             <br />
//             <button type="submit" className="login">
//               Login
//             </button>
//             <p>or</p>
//             <Link to="/register">
//               <button className="regis">Register</button>
//             </Link>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login({ setLogin, setUserProfile }) {
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

      if (response.data.user.status === 'admin') {
        navigate('/admin/productSchema');
      } else {
        const userProfileResponse = await axios.get(`http://localhost:4000/user/profile/${response.data.user.email}`);
        const userProfile = userProfileResponse.data;
        console.log(userProfile);
        setUserProfile(userProfile);
        localStorage.setItem('userProfile', JSON.stringify(userProfile));
        navigate('/', { state: { userProfile } });
      }
    } catch (error) {
      console.log(error);
      alert('Invalid email or password');
    }

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
    <div className="container_form">
      <div className="form-box">
        <header>
          <h1 className="title_login">Login</h1>
          <p className="mid_login">Welcome to TageTape, Yah!!</p>
        </header>
        <div className="s" style={{ margin: '0 auto', textAlign: 'center' }}>
          <form onSubmit={onSubmit}>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter your email"
              onChange={handleChange}
            />
            <br />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Enter your password"
              onChange={handleChange}
            />
            <br />
            <button type="submit" className="login">
              Login
            </button>
            <p>or</p>
            <Link to="/register">
              <button className="regis">Register</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;

