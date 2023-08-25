
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import TextField from '@mui/material/TextField';
import style from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate(); 


  async function handleSubmit(e) {
    let result = await fetch('http://127.0.0.1:5000/login',{
      method:"post",
      body:JSON.stringify({email,password}),
      headers:{
        'Content-Type':'application/json'
    },
    });
    result = await result.json()
    console.log(result);
    if(result.firstName){
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/DashBoard");
    }else{
      alert('Please enter correct details')
    }
  }

  function handleSignup(e){
    e.preventDefault();
    navigate('/Signup');
  }

  return (
    <div className={style.maincontain}>
      <div className={style.container}>
        <h1>Login</h1>
        <div className={style.container2}>
          <TextField
            style={{ marginBottom: '10px' }}
            id="standard-basic1"
            label="Email"
            variant="standard"
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            value={email}
          />
          <TextField
            style={{ marginBottom: '10px' }}
            id="standard-basic2"
            label="Password"
            variant="standard"
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            type="password"
            value={password}
          />
          <div>
            <a href="#">Forget Password ?</a>
          </div>
        </div>
        <button
          className={style.button}
          style={{ backgroundColor: 'blue' }}
          onClick={handleSubmit}
        >
          Login
        </button>
        <button
          className={style.button}
          style={{ backgroundColor: 'brown' }}
          onClick={handleSignup}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Login;
