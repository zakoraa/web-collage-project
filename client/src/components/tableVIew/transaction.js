import {useEffect, useState } from "react";
import axios from "axios";
import TableCSS from './table_view.module.css';
import Cart from '../shoppingCart/shopping_cart.module.css';


const TransactionTableView = () => {
    const [allTransaction, setAllTransaction] = useState([]);
    axios.defaults.withCredentials = true;

    useEffect (()=>{
        const fetchData = async()=>{
            const res = await axios.get("http://localhost:3000/transaction/get");
            const getTransaction = res.data;
            console.log(getTransaction);
            setAllTransaction(getTransaction);
        }
        fetchData();
        }, []);

  return (
    <>
    <div className={TableCSS["table-container"]}>
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
          </tr>
        </thead>
        <tbody>
        {/* {
          allTransaction.map((transaction, index)=>{
              return (
                <tr key={index}>
                  <td>{transaction.transaction_id}</td>
                  <td>{transaction.id_userFK}</td>
                  <td>{transaction.id_productFK}</td>
                  <td>{transaction.date}</td>
                  <td>{transaction.total_price}</td>
                </tr>
              );
          })
        }  */}
        </tbody>
       
      </table>
    </div>
    </>
  );
};

export default TransactionTableView;