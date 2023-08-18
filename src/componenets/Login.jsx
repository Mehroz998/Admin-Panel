
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import TextField from '@mui/material/TextField';
import style from './Login.module.css';
import { Link } from 'react-router-dom';

const Login = ({ data }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);

  const navigate = useNavigate(); 

  useEffect(() => {
    // Redirect to Dashboard if login is true
    if (login) {
      navigate('/Dashboard'); // Use history.push for redirection
    }
  }, [login, navigate]); // Include history in the dependency array

  function handleSubmit(e) {
    e.preventDefault();
    let found = false;
    for (let i in data) {
      if (data[i].email === email && data[i].password === password) {
        found = true;
        break;
      }
    }
    if (found) {
      setLogin(true);
      setEmail('');
      setPassword('');
    } else {
      alert("Credentials not Found");
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
