import React, { useState } from 'react';
import axios from 'axios';

function Register() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    if (userName && email && password && password === confirmPassword) {
      try {
        const user = {
          username: userName,
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
      alert('กรุณากรอกข้อมูลให้ครบและตรวจสอบรหัสผ่านอีกครั้ง');
    }

    console.log("Submit Success......");
    console.log(userName);
    console.log(email);
    console.log(password);
    console.log(confirmPassword);

    setUserName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={onSubmit}>
        <div className="s" style={{ margin: '0 auto', textAlign: 'center' }}>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          /><br />
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          /><br />
          <input
            type="password"
            name="confirmPassword"
            placeholder="confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          /><br />
          <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
