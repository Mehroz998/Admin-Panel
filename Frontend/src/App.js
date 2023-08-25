import React, { useState } from 'react'
import Login from './componenets/Login'
import UpdateProduct from './componenets/UpdateProduct/UpdateProduct'
import Header from './componenets/Header/Header'
import DashBoard from './componenets/DashBoard/DashBoard'
import UserManagement from './componenets/UserManagement/UserManagement'
import AddUser from './componenets/AddUser/AddUser'
import ProductManagement from './componenets/ProductManagement/ProductManagement'
import AddProduct from './componenets/AddProduct/AddProduct'
import UpdateUser from './componenets/UpdateUser/UpdatUser'
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
  

  return (
    <>
      <Router>
        <Header />
        <div>
        <Routes>
          <Route exact path="/DashBoard" element={<DashBoard/>}></Route>
          <Route exact path="/" element={<Login/>}></Route>
          <Route exact path="/Signup" element={<Signup/>}></Route>
          <Route exact path='/UserManagement' element={<UserManagement />}></Route>
          <Route exact path='/AddUser' element={<AddUser />}></Route>
          <Route exact path='/ProductManagement' element={<ProductManagement/>}></Route>
          <Route exact path='/AddProduct' element={<AddProduct/>}></Route>
          <Route exact path='/UpdateProduct/:id' element={<UpdateProduct/>}></Route>
          <Route exact path='/UpdateUser/:id' element={<UpdateUser/>}></Route>
        </Routes>
        </div>
        {/* <DashBoard data={data}/> */}



        {/* <AddUser UserData={UserData}/> */}

      </Router>
    </>
  )
}

export default App