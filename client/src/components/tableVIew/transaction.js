import {useEffect, useState } from "react";
import axios from "axios";
import TableCSS from './table_view.module.css';
import Cart from '../shoppingCart/shopping_cart.module.css';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TransactionTableView = () => {
    const [allTransaction, setAllTransaction] = useState([]);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect (()=>{
        const fetchData = async()=>{
            const res = await axios.get("http://localhost:3000/transaction/get");
            const getTransaction = res.data;
            console.log(getTransaction);
            setAllTransaction(getTransaction.data);
          }
          fetchData();
        }, []);

        const handleDeleteTransaction = async (transactionId) => {
          try {
            const res = await axios.post(`http://localhost:3000/transaction/delete?transaction_id=${transactionId}`);
            if(res.data.message === "Delete Transaction Success"){
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
        }}>TRANSACTION TABLE</h2>
        <hr className={Cart["hr"]}></hr>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>User ID</th>
            <th>Product ID</th>
            <th>Date</th>
            <th>Total Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
          allTransaction.map(transaction=>{
              return (
                <tr key={transaction.transaction_id}>
                  <td>{transaction.transaction_id}</td>
                  <td>{transaction.id_userFK}</td>
                  <td>{transaction.id_productFK}</td>
                  <td>{transaction.date}</td>
                  <td>Rp {transaction.total_price}</td>
                  <button className={TableCSS["delete-button"]} onClick={()=>handleDeleteTransaction(transaction.transaction_id)} >
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

export default TransactionTableView;

// useEffect (()=>{
//   const fetchData = async()=>{
//       const res = await axios.get("http://localhost:3000/userhasproduct/get");
//       const getUserHasProduct = res.data;
//       console.log(getUserHasProduct.data);
//       setAllUserHasProduct(getUserHasProduct.data);
//     }
//     fetchData();
//   }, []);