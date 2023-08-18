import React, { useState, useEffect } from 'react'
import TextField from '@mui/material/TextField';
import './AddProduct.css'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { Select } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

const AddProduct = ({ productData, addnewProduct, updateProduct, editableProduct }) => {

    const [ProductName, setName] = useState('');
    const [Category, setCategory] = useState('');
    const [Price, setPrice] = useState('');
    const [Genre, setGenre] = useState('');

    const navigate = useNavigate();

    let newProduct;
    function handleSubmit(e) {
        e.preventDefault();
        newProduct =  { id: editableProduct ? editableProduct.id : productData.length + 1, ProductName, Category, Price, Genre };;
        if (newProduct.ProductName.length < 5) {
            alert('Name Must be atleast 5 character long')
        }
        else if (newProduct.Price === '0' || newProduct.Price === '') {
            alert('Must be More than 0')
        }
        else if (newProduct.Category.length < 5) {
            alert('Category Must be atleast 5 character long')
        }
        else {
            if (editableProduct) {
                updateProduct(newProduct)  
                setName('');
                setCategory('');
                setGenre('');
                setPrice('');
                navigate('/ProductManagement') 
            }
            else {
                addnewProduct(newProduct);
                setName('');
                setCategory('');
                setGenre('');
                setPrice('');
                navigate('/ProductManagement')
            }
                
        }
    }
    useEffect(() => {
        if (editableProduct) {
            setName(editableProduct.ProductName)
            setCategory(editableProduct.Category)
            setPrice(editableProduct.Price)
            setGenre(editableProduct.Genre)
        }
    }, [editableProduct])


    

    return (
        <>
            <div className='main'>
                <div className='Form'>
                    <h1>{editableProduct ? "EDIT PRODUCT" : "ADD PRODUCT"}</h1>
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
                    <Button variant="contained" onClick={handleSubmit} margin="normal">{editableProduct ? "Edit Product" : 'Add Product'}</Button>
                </div>
            </div>
        </>
    )
}

export default AddProduct