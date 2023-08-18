import React from 'react'
import style from './DashBoard.module.css'

const DashBoard = ({userData,productData}) => {
  return (
    <>
        <div className={style.container}>
            <h1>DASHBOARD</h1>
                <div className={style.container2}>
                <div className={style.box}>
                    <h4>Total No. of Products</h4>
                    {/* <h1>{productData === null ? '0' : productData.length}</h1> */}
                    <h1>{productData.length}</h1>
                </div>
                <div className={style.box}>
                    <h4>Total No. of Users</h4>
                    <h1>{userData.length}</h1>
                    {/* <h1>{userData === null ? '0' : userData.length}</h1> */}
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default DashBoard