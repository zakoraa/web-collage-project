// import { useEffect, useState } from "react";
import axios from "axios";
import { FaSignOutAlt } from 'react-icons/fa';
import HomeAdmin from'./home.module.css';
import { useNavigate } from 'react-router-dom';
import AddProduct from "../../components/addProduct/add_product";
import ProductView from "../../components/product/product";


const AdminHomePage =()=>{
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const isAdmin= true;

    
    const handleLogout = () => {
        navigate('/');
    };

    return(
        <section>
        <div className={HomeAdmin["container"]}>
        <button className={HomeAdmin["logout-button"]} onClick={handleLogout}>
      <FaSignOutAlt className={HomeAdmin["logout-icon"]} /> Logout
    </button>
            <div className={HomeAdmin["products"]}>        
            <ProductView isAdmin = {isAdmin}/>
            </div>   
        </div>
    </section>
    );

}

export default AdminHomePage;