import axios from "axios";
import {useState } from "react";
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import HomeAdmin from'./home.module.css';
import { useNavigate } from 'react-router-dom';
import ProductView from "../../components/product/product";
import Product from '../../components/product/product.module.css';
import UpdateAdmin from "../../components/updateUser/update_admin";

const AdminHomePage =()=>{
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;
    const isAdmin= true;
    const [isUpdatePopupOpen, setUpdatePopupOpen] = useState(false);

    const showUpdatePopup = () => {
        setUpdatePopupOpen(true);
      };
  
      const hideUpdatePopup = () => {
        setUpdatePopupOpen(false);
      };
    
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
    const HandleToAdminRegister = () =>{
        navigate('/register/admin');
    }

    return(
        <>
        <div className={HomeAdmin["container"]}>
            <div className={HomeAdmin["products"]}>        
        <button className={HomeAdmin["logout-button"]} onClick={handleLogout}>
      <FaSignOutAlt className={HomeAdmin["logout-icon"]}  /> Logout
    </button>
    <div>
    <button className={HomeAdmin["admin-register"] } onClick={HandleToAdminRegister}>Register</button>
    </div>
    <button class={HomeAdmin["update-button"]} onClick={showUpdatePopup}><FaUser size={18} color="white" style={{
                marginRight: 10,
                alignItems : "center",
                justifyContent : "center",
                display : "flex"
              }} className="custom-icon" />Update Your Data</button>
              <div>
                  <ProductView isAdmin = {isAdmin}/>
              {isUpdatePopupOpen && (
                  <div className={Product["search-overlay"]}>
                    <div className={Product["search-popup"]}>
                      <span className={Product["close"]} onClick={hideUpdatePopup}>&times;</span>    
                        <UpdateAdmin />
                    </div>
                  </div>)
              }
              </div>
    
            <div className={HomeAdmin["bottom-hr"]}>
                <hr className={HomeAdmin["hr"]}></hr>
                <button className={HomeAdmin["search-button"]} onClick={handleToTransactionTable} >Transaction Table</button> 
                <button className={HomeAdmin["search-button"]} onClick={handleToUserTable} >User Table</button> 
                <button className={HomeAdmin["search-button"]} onClick={HandleToUserHasProuductTable} >User Has Product Table</button> 
                <hr className={HomeAdmin["hr"]}></hr>
            </div>
            </div>  
           
        </div>
    </>
    );

}

export default AdminHomePage;