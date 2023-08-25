import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useHistory hook
import TextField from '@mui/material/TextField';
import style from './Signup.module.css';

const Signup = () => {
    const initialSignupData = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    };
    const [signupData , setSignupData] = useState(initialSignupData)
    const navigate = useNavigate(); 


    function handleChange(e) {
        setSignupData({...signupData , 
        [e.target.name] : e.target.value
        })
    }

    const handleSubmit = async (e)=> {
        // e.preventDefault();
        if(signupData.firstName === ''){
            alert("First Name is Required")
        }
        else if(signupData.lastName === ''){
            alert('Last Name is Required')
        }
        else if(signupData.password.length < 6){
            alert('Password Must be atleast 6 character long')
        }
        else if(signupData.confirmPassword !== signupData.password ){
            alert('Confirm Password is not same')
        }
        else{
            
            let result = await fetch('http://localhost:5000/Signup',{
                method:"post",
                body:JSON.stringify({firstName:signupData.firstName,lastName:signupData.lastName,email:signupData.email,password:signupData.password}),
                headers:{
                    'Content-Type':'application/json'
                },
            })
            result = await result.json()
            setSignupData(initialSignupData)
            navigate('/')
            console.log(result)  
    }
}
    
    return (
        <>
            <div className={style.maincontain}>
                <div className={style.container}>
                    <h1>Singup</h1>
                    <div className={style.container2}>
                        <TextField
                            style={{ marginBottom: '10px' }}
                            id="standard-basic1"
                            label="First Name"
                            variant="standard"
                            onChange={handleChange}
                            name="firstName"
                            value={signupData.firstName}
                        />
                        <TextField
                            style={{ marginBottom: '10px' }}
                            id="standard-basic2"
                            label="Last Name"
                            variant="standard"
                            onChange={handleChange}
                            name="lastName"
                            value={signupData.lastName}
                        />
                        <TextField
                            style={{ marginBottom: '10px' }}
                            id="standard-basic3"
                            label="Email"
                            variant="standard"
                            onChange={handleChange}
                            name="email"
                            value={signupData.email}
                        />
                        <TextField
                            style={{ marginBottom: '10px' }}
                            id="standard-basic4"
                            label="Password"
                            variant="standard"
                            onChange={handleChange}
                            name="password"
                            type='password'
                            value={signupData.password}
                        />
                        <TextField
                            style={{ marginBottom: '10px' }}
                            id="standard-basic5"
                            label="Confirm Password"
                            variant="standard"
                            onChange={handleChange}
                            name="confirmPassword"
                            type="password"
                            value={signupData.confirmPassword}
                        />
                    </div>
                    
                    <button
                        className={style.button}
                        style={{ backgroundColor: 'brown' }}
                        onClick={handleSubmit}
                    >
                        Login
                    </button>
                </div>
            </div>
        </>
    )
}

export default Signup