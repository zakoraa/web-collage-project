// import { useEffect, useState } from "react";
import axios from "axios";
// import { useNavigate } from 'react-router-dom';
import HomeView from '../../components/home/home';
import HomeAdmin from'./home.module.css';
import AddProduct from "../../components/addProduct/add_product";
import ProductView from "../../components/product/product";


const AdminHomePage =()=>{
    axios.defaults.withCredentials = true;

    return(
        <section>
        <div className={HomeAdmin["container"]}>
            <div className={HomeAdmin["products"]}>
            <ProductView/>
            </div>
        <AddProduct className={HomeAdmin["cart" ]}/>
        
        </div>
        
    </section>
    );

}

export default AdminHomePage;