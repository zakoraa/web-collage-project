import Cart from './shopping_cart.module.css';
import { useState, useEffect } from 'react';
import axios from "axios";

const ShoppingCart = ({cartItems, removeFromCart})=>{
  const [idUserFK, setIdUserFK] = useState();
  const [totalPrice, setTotalPrice]= useState();
  const [transactionId, setTransactionId] = useState();


    const handleGetTransactionId = async (e,transactionId)=>{
      e.preventDefault();
      const res = await axios.post(`http://localhost:3000/transaction/delete?transaction_id=${transactionId}`);
      console.log(res.data.message);
        setTransactionId(res.data.id);
        console.log(transactionId);
      if (res.data.message === "Delete Transaction Success") {  
        console.log("MANTAP");
        return;
  }
  
    };
  
  
  // for (const item of cartItems) {
  //   const idProductFK = item.id_product;
  //   setIdProductFK(idProductFK);
  // }

  useEffect(() => {
    const calculateTotalPrice = () => {
      const total = cartItems.reduce((accumulator, item) => {
        return accumulator + item.price;
      }, 0);
      setTotalPrice(total);
    };

    calculateTotalPrice();
  }, [cartItems]);
  // const handleBuyProducts = async(e,idUserFK, idProductFK,totalPrice)=>{
  //     e.preventDefault();
  //     const res = await axios.post(`http://localhost:3000/transaction/add?id_userFK=${idUserFK}&id_productFK=${idProductFK}&total_price=${totalPrice}`);
  //     if(res.data.message === "Add Transaction Success"){
  //       console.log(res.data.result);
  //       return;
  //     }
  // }


  const handleRemoveItem = (e,transactionId,transaction_id) => {
    handleGetTransactionId(e,transactionId);
    removeFromCart(transaction_id);
  };

    return(
        <div className={Cart["cart"]}>
      <h2>SHOPPING CART</h2>
      <hr className={Cart["hr"]}></hr>
      {cartItems.length === 0 ? (
          <></>
        ) : <button 
        className={Cart["buy-product"]} 
        // onClick={(e)=> handleBuyProducts(e,idUserFK,idProductFK,totalPrice)}
       >Buy Now </button>}
     
      <div className={Cart["cart-items"]}>
            {cartItems.map((item, index) => (
              <li key={index} className={Cart["cart-item"]}>
                <div className={Cart["product-image"]}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={Cart["product-details"]}>
                  <h3>{item.name}</h3>
                  <p>IDR {item.price}</p>
                <button 
                className={Cart["delete-product"]}
                onClick={(e) => handleGetTransactionId(e,transactionId)}>Delete</button>
                </div>
              </li>
            ))}
            
      </div>
    </div>
    );
}

export default ShoppingCart;