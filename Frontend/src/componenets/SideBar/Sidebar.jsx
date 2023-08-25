import React, { useState } from 'react'
import './Sidebar.css'
import { Link } from 'react-router-dom';

const Sidebar = ({newcloseBar}) => {
  const [closeBar , setCloseBar] = useState(false);

  function handleCloseSidebar(e){
    e.stopPropagation();
    setCloseBar(!closeBar);
    newcloseBar(closeBar);
  }
  return (
    <>
        <div className='sidebar'>
            <i class="fa-solid fa-x" onClick={handleCloseSidebar}></i>
            <div className='in-sidebar'>
                <Link className='tag' to='/DashBoard'>DashBoard</Link>
                <Link className="tag" to='/UserManagement'>User Management</Link>
                <Link className="tag" to= '/ProductManagement'>Product Management</Link>
            </div>
        </div>
    </>
  )
}

export default Sidebar