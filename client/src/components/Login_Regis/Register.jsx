import React, { useState } from 'react';
import axios from 'axios';
import '../../sass/LoginandRegis/Register.scss'
import { Link } from 'react-router-dom';
function Register() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
  
    if (firstname && lastname && email && password && (password === confirmPassword)) {
      try {
        const user = {
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
        };
  
        await axios.post('http://localhost:4000/register/user', user);
        alert('สร้างผู้ใช้งานสำเร็จ');
      } catch (error) {
        alert('เกิดข้อผิดพลาดในการสร้างผู้ใช้งาน');
        console.log(error);
      }
    } else {
      if (password !== confirmPassword) {
        alert('รหัสผ่านไม่ตรงกัน กรุณาตรวจสอบอีกครั้ง');
      } else {
        alert('กรุณากรอกข้อมูลให้ครบและตรวจสอบรหัสผ่านอีกครั้ง');
      }
    }
  
    setFirstname("");
    setLastname("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  

  return (


    <div className='container_form'>
      <div className="form-box">

        <header>
          <h1 className='title_login'>Register </h1>
          <p className='mid_login'>Welcome to TageTape</p>
        </header>
        <form onSubmit={onSubmit}>

          <input
          className='inputLog'
            type="text"
            name="firstname"
            placeholder="Enter your first name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
           <input
           className='inputLog'
            type="text"
            name="lastname"
            placeholder="Enter your last name"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
          <input
          className='inputLog'
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
          className='inputLog'
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
          className='inputLog'
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <hr />
          <button type="submit" className='regis'>Register</button>
          <h4 style={{margin:"0",textAlign:"center"}}>or</h4>
          <Link to='/login'>
          <button type="submit" className='login'>Login</button>
          </Link>
          
        </form>
      </div>
    </div>
  );
}

export default Register;
