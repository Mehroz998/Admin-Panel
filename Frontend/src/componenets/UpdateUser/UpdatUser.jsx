import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
// import './UpdateProduct.css'
import Button from '@mui/material/Button';
import { useNavigate , useParams} from 'react-router-dom';
import { Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const UpdateUser = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('+92');
    const [address, setAddress] = useState('');
    const params = useParams();

    useEffect(()=>{
        getUserDetails();
    },[])

    const getUserDetails = async ()=>{
        let result = await fetch(`http://localhost:5000/userdata/${params.id}`)
        result = await result.json();
        setName(result.name)
        setEmail(result.email)
        setPhone(result.phone)
        setAddress(result.address)
    }
    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
        let result = await fetch(`http://localhost:5000/userdata/${params.id}`,{
            method:"put",
            body:JSON.stringify({ name,email,phone,address}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json();
        navigate("/UserManagement");

    }
    




    return (
        <>
            <div className='main'>
                <div className='Form'>
                    <h1>UPDATE PRODUCT</h1>
                    <form className='AddUser'>
                        <TextField id="outlined-basic" label="Name" variant="outlined" className='inputs' margin="normal" onChange={(e) => setName(e.target.value)} value={name} ProductName='ProductName' />
                        <TextField id="outlined-basic" label="Email" variant="outlined" className='inputs' margin="normal" onChange={(e) => setEmail(e.target.value)} value={email} ProductName='Email' />
                        <TextField id="outlined-basic" label="Contact Number" variant="outlined" className='inputs' margin="normal" onChange={(e) => setPhone(e.target.value)} value={phone} ProductName='Phone' />
                        <TextField id="outlined-basic" label="Address" variant="outlined" className='inputs' margin="normal" onChange={(e) => setAddress(e.target.value)} value={address} ProductName='Adress' />
                    </form>
                    <Button variant="contained" onClick={handleSubmit} margin="normal">Update Product</Button>
                </div>
            </div>
        </>
    )
}

export default UpdateUser