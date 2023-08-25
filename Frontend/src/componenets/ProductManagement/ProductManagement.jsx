import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './productManagement.css'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const ProductManagement = () => {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = async ()=>{
        let result = await fetch("http://127.0.0.1:5000/products");
        result = await result.json();
        setProducts(result);
    }
    const deleteProduct = async(id)=>{
        let result = await fetch(`http://127.0.0.1:5000/product/${id}`,{
            method:"Delete"
        });
        result = await result.json();
        if(result){
            getProducts();
        }
    }

    return (
        <>
            <div className="contain">
                <div className='heading'><h1>PRODUCT MANAGEMENT</h1></div>
                <Link className='AddButton' to='/AddProduct'>Add Product</Link>
                <TableContainer component={Paper} style={{margin:'15px 0'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table" >
                        <TableHead>
                            <TableRow >
                                <TableCell style={{fontWeight:"bold"}}>Product Name</TableCell>
                                <TableCell align="right" style={{fontWeight:"bold"}}>Category</TableCell>
                                <TableCell align="right" style={{fontWeight:"bold"}}>Price</TableCell>
                                <TableCell align="right" style={{fontWeight:"bold"}}>Genre</TableCell>
                                <TableCell align="right" style={{fontWeight:"bold"}}>Action</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((e) => (
                                <TableRow
                                    key={e._id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {e.name}
                                    </TableCell>
                                    <TableCell align="right">{e.category}</TableCell>
                                    <TableCell align="right">Rs. {e.price}</TableCell>
                                    <TableCell align="right">{e.genre}</TableCell>
                                    <TableCell align="right"><Button variant="contained" style={{ margin: "5px 0", padding: "10px 0", backgroundColor: "red"  }} onClick={()=>deleteProduct(e._id)}><i class="fa-solid fa-trash"></i></Button>
                                    <Button variant="contained" style={{ margin: "5px 0", padding: "10px 0", backgroundColor: "#19e019" }}  component={Link} to={"/UpdateProduct/"+e._id} ><i class="fa-solid fa-pen-to-square"></i></Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                
            </div>
        </>
    )
}

export default ProductManagement