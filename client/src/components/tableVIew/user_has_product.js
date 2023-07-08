import {useEffect, useState } from "react";
import axios from "axios";
import TableCSS from './table_view.module.css';
import Cart from '../shoppingCart/shopping_cart.module.css';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const UserHasProductTableView = () => {
    const [allUserHasProduct, setAllUserHasProduct] = useState([]);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect (()=>{
        const fetchData = async()=>{
            const res = await axios.get("http://localhost:3000/userhasproduct/get");
            const getUserHasProduct = res.data;
            console.log(getUserHasProduct);
            setAllUserHasProduct(getUserHasProduct.data);
          }
          fetchData();
        }, []);

    
        const handleDeleteUserHasProduct = async (userId, productId) => {
          try {
            const res = await axios.post(`http://localhost:3000/userhasproduct/delete?id_userFK=${userId}&id_productFK=${productId}`);
            if(res.data.message === "Delete Success"){
              window.location.reload();
              return;
            }
          } catch (error) {
            console.log(error);
          }
        }
      
    const handleBack = ()=>{
      navigate('/home/admin/:id');
    }

  return (
    <>
    <div className={TableCSS["table-container"]}>
    <button className={TableCSS["logout-button"]} onClick={handleBack}>
      <FaSignOutAlt className={TableCSS["logout-icon"]} /> Back
    </button>
        <h2 style={{
            textAlign: "center"
        }}>USER HAS PRODUCT TABLE</h2>
        <hr className={Cart["hr"]}></hr>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Product ID</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
          allUserHasProduct.map(userHasProduct=>{
              return (
                <tr >
                  <td>{userHasProduct.id_userFK}</td>
                  <td>{userHasProduct.id_productFK}</td>
                  <button className={TableCSS["delete-button"]} onClick={() => handleDeleteUserHasProduct(userHasProduct.id_userFK, userHasProduct.id_productFK)}>
                    DELETE
                  </button>
                </tr>
              );
          })
        } 
        </tbody>
       
      </table>
    </div>
    </>
  );
};

export default UserHasProductTableView;

// useEffect (()=>{
//   const fetchData = async()=>{
//       const res = await axios.get("http://localhost:3000/userhasproduct/get");
//       const getUserHasProduct = res.data;
//       console.log(getUserHasProduct.data);
//       setAllUserHasProduct(getUserHasProduct.data);
//     }
//     fetchData();
//   }, []);