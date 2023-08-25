import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import './UpdateProduct.css'
import Button from '@mui/material/Button';
import { useNavigate , useParams} from 'react-router-dom';
import { Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const UpdateProduct = () => {

    const [ProductName, setName] = useState('');
    const [Category, setCategory] = useState('');
    const [Price, setPrice] = useState('');
    const [Genre, setGenre] = useState('');
    const params = useParams();

    useEffect(()=>{
        getProductDetails();
    },[])

    const getProductDetails = async ()=>{
        let result = await fetch(`http://localhost:5000/product/${params.id}`)
        result = await result.json();
        setName(result.name)
        setCategory(result.category)
        setPrice(result.price)
        setGenre(result.genre)
    }
    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {
        let result = await fetch(`http://localhost:5000/product/${params.id}`,{
            method:"put",
            body:JSON.stringify({ name: ProductName, category: Category, price: Price, genre: Genre }),
            headers:{
                "Content-Type":"application/json"
            }
        })
        result = await result.json();
        navigate("/ProductManagement");

    }
    




    return (
        <>
            <div className='main'>
                <div className='Form'>
                    <h1>UPDATE PRODUCT</h1>
                    <form className='AddUser'>
                        <TextField id="outlined-basic" label="Name" variant="outlined" className='inputs' margin="normal" onChange={(e) => setName(e.target.value)} value={ProductName} ProductName='ProductName' />
                        <TextField id="outlined-basic" label="Category" variant="outlined" className='inputs' margin="normal" onChange={(e) => setCategory(e.target.value)} value={Category} ProductName='Category' />
                        <TextField id="outlined-basic" label="Price" variant="outlined" className='inputs' margin="normal" onChange={(e) => setPrice(e.target.value)} value={Price} ProductName='Price' />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Genre</InputLabel>
                            <Select labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={Genre}
                                label="Genre"
                                onChange={(e) => setGenre(e.target.value)}
                                margin="normal"
                            >
                                <MenuItem value="Men">Men</MenuItem>
                                <MenuItem value="Women">Women</MenuItem>
                                <MenuItem value='Children'>Children</MenuItem>
                            </Select>
                        </FormControl>
                    </form>
                    <Button variant="contained" onClick={handleSubmit} margin="normal">Update Product</Button>
                </div>
            </div>
        </>
    )
}

export default UpdateProduct