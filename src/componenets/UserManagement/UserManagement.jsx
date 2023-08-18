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


const UserManagement = ({userData,deleteVideo,editUser}) => {

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
                            {userData.map((e) => (
                                <TableRow
                                    key={e.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {e.name}
                                    </TableCell>
                                    <TableCell align="right">{e.email}</TableCell>
                                    <TableCell align="right">{e.phone}</TableCell>
                                    <TableCell align="right">{e.address}</TableCell>
                                    <TableCell align="right"><Button variant="contained" style={{ margin: "5px 0", padding: "10px 0", backgroundColor: "red" }} onClick={()=>deleteVideo(e.id)}><i class="fa-solid fa-trash"></i></Button>
                                    <Button variant="contained" style={{ margin: "5px 0", padding: "10px 0", backgroundColor: "#19e019" }} onClick={()=>editUser(e.id)} component={Link} to="/AddUser" ><i class="fa-solid fa-pen-to-square"></i></Button></TableCell>
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