import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import './AddProduct.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const AddProduct = () => {

    const [ProductName, setName] = useState('');
    const [Category, setCategory] = useState('');
    const [Price, setPrice] = useState('');
    const [Genre, setGenre] = useState('');

    const navigate = useNavigate();

    
    const handleSubmit = async (e) => {


        if (!ProductName || !Category || !Price || !Genre) {
            alert("Please fill all field");
        }
        else {
            const userId = JSON.parse(localStorage.getItem('user'))._id;
            let result = await fetch("http://127.0.0.1:5000/add-product", {
                method: "post",
                body: JSON.stringify({ name: ProductName, category: Category, price: Price, genre: Genre, userId }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            result = await result.json();
            navigate("/ProductManagement")
        }
    }
    




    return (
        <>
            <div className='main'>
                <div className='Form'>
                    <h1>ADD PRODUCT</h1>
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
                        {/* <TextField id="outlined-multiline-flexible" label="Address" multiline maxRows={3} className='inputs' margin="normal" onChange={(e) => setGenre(e.target.value)} value={Genre} ProductName='adddress' /> */}
                    </form>
                    <Button variant="contained" onClick={handleSubmit} margin="normal">Add Product</Button>
                </div>
            </div>
        </>
    )
}

export default AddProduct