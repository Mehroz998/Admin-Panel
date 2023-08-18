import React, { useState } from 'react'
import style from './Header.module.css'
import Sidebar from '../SideBar/Sidebar';

const Header = () => {
  const [sideBar , setSideBar] = useState(false);

  function handleSidebar(){
    setSideBar(!sideBar);
  }

  function newcloseBar(closeBar){
    setSideBar(closeBar);
  }

  return (
    <>  
    
        <div className={style.header}>
            {
              sideBar ? <Sidebar newcloseBar={newcloseBar}/> : ''
            }
            {sideBar ? '' : <div><i className="fa-solid fa-bars" onClick={handleSidebar}></i></div>}
            {/* <div> <i className="fa-solid fa-bars" onClick={handleSidebar}></i></div> */}
            <h2>Product Management App</h2>
            {/* <div className={style.Loginicon}><i class="fa-solid fa-user"></i></div> */}
            
        </div>
        
    </>
  )
}

export default Header