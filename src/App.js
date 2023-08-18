import React, { useState } from 'react'
import Login from './componenets/Login'
import Data from './data/data'
import Header from './componenets/Header/Header'
import DashBoard from './componenets/DashBoard/DashBoard'
import UserManagement from './componenets/UserManagement/UserManagement'
import UserData from './data/UserData'
import AddUser from './componenets/AddUser/AddUser'
import ProductData from './data/ProductData'
import ProductManagement from './componenets/ProductManagement/ProductManagement'
import AddProduct from './componenets/AddProduct/AddProduct'
import Sidebar from './componenets/SideBar/Sidebar'

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Signup from './componenets/Signup/Signup'


export const App = () => {
  const [userData , setUserData] = useState(UserData);
  const [productData , setProductData] = useState(ProductData);
  const [data , setData] = useState(Data);
  const [editableUser , setEditableUser] = useState(null);
  const [editableProduct , setEditableProduct] = useState(null);


  function deleteVideo(id){
    setUserData(userData.filter((e)=>{
          return(
            e.id!==id 
          )
       })) 
  }

  function addnewUser(newUser) {
    setUserData([...userData , newUser]);
  }
  
  function editUser(id){
    setEditableUser(userData.find((e)=>e.id===id))
  }

  function updateUser(newUser){
    console.log(newUser);
    let index = userData.findIndex(e=>e.id===newUser.id)
    const newUpdatedUser = [...userData]
    newUpdatedUser.splice(index,1,newUser)
    setUserData(newUpdatedUser);
    setEditableUser(null);

  }

  function deleteProduct(id){
    setProductData(productData.filter((e)=>{
      return(
        e.id!==id 
      )
   }))
  }

  function editProduct(id){
    setEditableProduct(productData.find((e)=>e.id===id))
  }

  function addnewProduct(newProduct){
    setProductData([...productData , newProduct]);
  }
  function updateProduct(newProduct){
    let index = productData.findIndex(e=>e.id===newProduct.id)
    const newUpdatedProduct = [...productData]
    newUpdatedProduct.splice(index,1,newProduct)
    setProductData(newUpdatedProduct);
    setEditableProduct(null);
  }

  function addData(signupData){
    console.log(signupData);
    setData([...data , signupData]);
    
  
  }

  localStorage.setItem('newData' , JSON.stringify(data))
  localStorage.setItem('ProductData12',JSON.stringify(productData));
  localStorage.setItem('UserData',JSON.stringify(userData));


  return (
    <>
      <Router>
        <Header />
        <div>
        <Routes>
          <Route exact path="/DashBoard" element={<DashBoard userData={userData} productData={productData}/>}></Route>
          <Route exact path="/" element={<Login data={data}/>}></Route>
          <Route exact path="/Signup" element={<Signup addData={addData}/>}></Route>
          <Route exact path='/UserManagement' element={<UserManagement userData={userData} deleteVideo={deleteVideo} editUser={editUser}/>}></Route>
          <Route exact path='/AddUser' element={<AddUser userData={userData} addnewUser={addnewUser} editableUser={editableUser} updateUser={updateUser}/>}></Route>
          <Route exact path='/ProductManagement' element={<ProductManagement productData={productData} deleteProduct={deleteProduct} editProduct={editProduct}/>}></Route>
          <Route exact path='/AddProduct' element={<AddProduct productData={productData} addnewProduct={addnewProduct} editableProduct={editableProduct} updateProduct={updateProduct}/>}></Route>
        </Routes>
        </div>
        {/* <DashBoard data={data}/> */}



        {/* <AddUser UserData={UserData}/> */}

      </Router>
    </>
  )
}

export default App