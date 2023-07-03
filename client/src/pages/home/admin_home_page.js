// import { useEffect, useState } from "react";
import axios from "axios";
import { FaSignOutAlt } from 'react-icons/fa';
import HomeAdmin from'./home.module.css';
import { useNavigate } from 'react-router-dom';
import AddProduct from "../../components/addProduct/add_product";
import Cart from '../../components/shoppingCart/shopping_cart.module.css';
import ProductView from "../../components/product/product";


const AdminHomePage =()=>{
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const isAdmin= true;
    
    const handleLogout = () => {
        navigate('/');
    };

    const handleToTransactionTable = ()=>{
        navigate('/home/admin/tabletransaction');
    }
    const handleToUserTable = ()=>{
        navigate('/home/admin/tableuser');
    }

    const HandleToUserHasProuductTable = () =>{
        navigate('/home/admin/tableuserhasproduct');
    }

    return(
        <>
        <div className={HomeAdmin["container"]}>
        <button className={HomeAdmin["logout-button"]} onClick={handleLogout}>
      <FaSignOutAlt className={HomeAdmin["logout-icon"]} /> Logout
    </button>
            <div className={HomeAdmin["products"]}>        
            <ProductView isAdmin = {isAdmin}/>
            </div>  
            <div className={HomeAdmin["bottom-hr"]}>
                <hr className={HomeAdmin["hr"]}></hr>
                <button className={HomeAdmin["search-button"]} onClick={handleToTransactionTable} >Transaction Table</button> 
                <button className={HomeAdmin["search-button"]} onClick={handleToUserTable} >User Table</button> 
                <button className={HomeAdmin["search-button"]} onClick={HandleToUserHasProuductTable} >User Has Product Table</button> 
                <hr className={HomeAdmin["hr"]}></hr>
            </div>
           
        </div>
    </>
    );

}

export default AdminHomePage;