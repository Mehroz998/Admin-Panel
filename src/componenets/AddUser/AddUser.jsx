import React, { useState , useEffect} from 'react'
import TextField from '@mui/material/TextField';
import './AddUser.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const AddUser = ({userData,addnewUser,updateUser, editableUser}) => {

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('+92');
    const [address , setAddress] = useState('');
    
    let newUser;
    const navigate = useNavigate(); 
    function handleSubmit(e){
        e.preventDefault();
        newUser = { id: userData.length + 1, name, email, phone, address };
        if(newUser.name.length < 3){
            alert('Name Must be atleast 3 character long')
        }
        else if(newUser.phone.length !== 13 ){
            alert('Number Must be Pakistani +92 formatted')
        }
        else if(newUser.address.length < 6){
            alert('Address Must be 6 character long')
        }
        else{
            if(editableUser){
                updateUser(newUser)
                setName('');
                setEmail('');
                setAddress('');
                setPhone('+92');
                navigate('/UserManagement')
            }
            else{
                addnewUser(newUser);
                setName('');
                setEmail('');
                setAddress('');
                setPhone('+92');
                navigate('/UserManagement')
            }
            
            
        } 
    }
    useEffect(()=>{
        if(editableUser){
            setName(editableUser.name)
            setEmail(editableUser.email)
            setPhone(editableUser.phone)
            setAddress(editableUser.address)
        }
    },[editableUser])

    return (
        <>
            <div className='main'>
                <div className='Form'>
                    <h1>{editableUser ? "EDIT USER" :"ADD USER"}</h1>
                    <form className='AddUser'>
                        <TextField id="outlined-basic" label="Name" variant="outlined" className='inputs' margin="normal" onChange={(e)=>setName(e.target.value)} value={name} name='name'/>
                        <TextField id="outlined-basic" label="Email" variant="outlined" className='inputs' margin="normal" onChange={(e)=>setEmail(e.target.value)} value={email} name='email'/>
                        <TextField id="outlined-basic" label="Contact Number" variant="outlined" className='inputs' margin="normal" onChange={(e)=>setPhone(e.target.value)} value={phone} name='phone' />
                        <TextField id="outlined-multiline-flexible" label="Address" multiline maxRows={3} className='inputs' margin="normal" onChange={(e)=>setAddress(e.target.value)} value={address} name='adddress'/>
                    </form>
                    <Button variant="contained" onClick={handleSubmit}>{editableUser ? "Edit User":'Add User'}</Button>
                </div>
                
            </div>
        </>
    )
}

export default AddUser