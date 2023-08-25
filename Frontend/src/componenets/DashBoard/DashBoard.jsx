import React , {useEffect , useState} from 'react'
import style from './DashBoard.module.css'

const DashBoard = () => {
    const [usersdata, setUsersdata] = useState([]);

    useEffect(() => {
        getUsersdata();
    }, [])

    const getUsersdata = async () => {
        let result = await fetch("http://127.0.0.1:5000/usersdata");
        result = await result.json();
        setUsersdata(result.length)
    }

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        getProducts();
    },[])

    const getProducts = async ()=>{
        let result = await fetch("http://127.0.0.1:5000/products");
        result = await result.json();
        setProducts(result.length);
    }
    return (
        <>
            <div className={style.container}>
                <h1>DASHBOARD</h1>
                <div className={style.container2}>
                    <div className={style.box}>
                        <h4>Total No. of Products</h4>
                        <h1>{products}</h1>
                    </div>
                    <div className={style.box}>
                        <h4>Total No. of Users</h4>
                        <h1>{usersdata}</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DashBoard