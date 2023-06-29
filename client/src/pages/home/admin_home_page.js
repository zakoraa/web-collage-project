// import { useEffect, useState } from "react";
import axios from "axios";
import HomeView from '../../components/home/home';
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
            <div className={HomeAdmin["products"]}>
            <button className={HomeAdmin["logout-button"]} onClick={handleLogout}>
      <FaSignOutAlt className={HomeAdmin["logout-icon"]} /> Logout
    </button>
            <ProductView isAdmin = {isAdmin}/>
            </div>
        <AddProduct className={HomeAdmin["cart" ]}/>
        
        </div>
        
    </section>
    );

}

export default AdminHomePage;