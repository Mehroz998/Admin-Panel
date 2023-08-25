import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import './AddUser.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('+92');
    const [address, setAddress] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) => {


        if (!name || !email || !phone || !address) {
            alert("Please fill all field");
        }
        else {
            const userId = JSON.parse(localStorage.getItem('user'))._id;
            let result = await fetch("http://127.0.0.1:5000/add-user", {
                method: "post",
                body: JSON.stringify({ name,email,phone,address,userId }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            result = await result.json();
            navigate("/UserManagement")
        }
    }

    return (
        <>
            <div className='main'>
                <div className='Form'>
                    <h1>ADD USER</h1>
                    <form className='AddUser'>
                        <TextField id="outlined-basic" label="Name" variant="outlined" className='inputs' margin="normal" onChange={(e) => setName(e.target.value)} value={name} name='name' />
                        <TextField id="outlined-basic" label="Email" variant="outlined" className='inputs' margin="normal" onChange={(e) => setEmail(e.target.value)} value={email} name='email' />
                        <TextField id="outlined-basic" label="Contact Number" variant="outlined" className='inputs' margin="normal" onChange={(e) => setPhone(e.target.value)} value={phone} name='phone' />
                        <TextField id="outlined-multiline-flexible" label="Address" multiline maxRows={3} className='inputs' margin="normal" onChange={(e) => setAddress(e.target.value)} value={address} name='adddress' />
                    </form>
                    <Button variant="contained" onClick={handleSubmit}>Add User</Button>
                </div>

            </div>
        </>
    )
}

export default AddUser