import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './UserMangement.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import {useState,useEffect} from 'react'


const UserManagement = () => {
    const [usersdata,setUsersdata] = useState([]);

    useEffect(()=>{
        getUsersdata();
    },[])

    const getUsersdata = async ()=>{
        let result = await fetch("http://127.0.0.1:5000/usersdata");
        result = await result.json();
        setUsersdata(result);
        
    }
    const deleteUserdata = async(id)=>{
        let result = await fetch(`http://127.0.0.1:5000/userdata/${id}`,{
            method:"Delete"
        });
        result = await result.json();
        if(result){
            getUsersdata();
        }
}
    

    return (
        <>
            <div className="contain">
                <div className='heading'><h1>USER MANAGEMENT</h1></div>
                <Link className='AddButton' to='/AddUser'>Add User</Link>
                <TableContainer component={Paper} style={{margin:'15px 0'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                        <TableHead>
                            <TableRow >
                                <TableCell style={{fontWeight:"bold"}}>User Name</TableCell>
                                <TableCell align="right" style={{fontWeight:"bold"}}>User Email</TableCell>
                                <TableCell align="right" style={{fontWeight:"bold"}}>Contact Number</TableCell>
                                <TableCell align="right" style={{fontWeight:"bold"}}>Address</TableCell>
                                <TableCell align="right" style={{fontWeight:"bold"}}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {usersdata.map((e) => (
                                <TableRow
                                    key={e._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {e.name}
                                    </TableCell>
                                    <TableCell align="right">{e.email}</TableCell>
                                    <TableCell align="right">{e.phone}</TableCell>
                                    <TableCell align="right">{e.address}</TableCell>
                                    <TableCell align="right"><Button variant="contained" style={{ margin: "5px 0", padding: "10px 0", backgroundColor: "red" }} onClick={()=>deleteUserdata(e._id)}><i class="fa-solid fa-trash"></i></Button>
                                    <Button variant="contained" style={{ margin: "5px 0", padding: "10px 0", backgroundColor: "#19e019" }}  component={Link} to={"/UpdateUser/"+e._id} ><i class="fa-solid fa-pen-to-square"></i></Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </div>
        </>
    )
}

export default UserManagement