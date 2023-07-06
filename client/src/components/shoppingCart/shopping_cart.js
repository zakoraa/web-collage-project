import Cart from './shopping_cart.module.css';
import { useState, useEffect } from 'react';
import axios from "axios";
import { Alert } from 'react-bootstrap';

const ShoppingCart = ({cartItems, removeFromCart})=>{
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [idUserFK, setIdUserFK] = useState();
  const [totalPrice, setTotalPrice]= useState();
  const [transactionId, setTransactionId] = useState();
  const [allTransaction, setAllTransaction] = useState([]);
  const [allUserHasProduct, setAllUserHasProduct] = useState([]);
  axios.defaults.withCredentials = true;

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleAlertShow = (message) => {
    setShowAlert(true);
    setAlertMessage(message);
  };

    useEffect (()=>{
        const fetchData = async()=>{
            const res = await axios.get("http://localhost:3000/transaction/get");
            const getTransaction = res.data;
            console.log(getTransaction.data);
            setAllTransaction(getTransaction.data);
          }
          fetchData();
        }, []);

    const handleGetTransactionId = async (transactionId)=>{
      const res = await axios.post(`http://localhost:3000/transaction/delete?transaction_id=${transactionId}`);
        console.log(res.data.message);
        setTransactionId(res.data.id);
        console.log(transactionId);
      if (res.data.message === "Delete Transaction Success") {  
        console.log("MANTAP");
        return;
  }
  
    };

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
  const mergedArray = cartItems.map((item, index) => {
    const mergedItem = {
      ...item,
      ...allTransaction[index]
    };
  
    return mergedItem;
  });

  
 
  // console.log("inin",mergedArray);

  // const handleRemoveItem = (e,transactionId,transaction_id) => {
  //   handleGetTransactionId(e,transactionId);
  //   removeFromCart(transaction_id);
  // };

  const handleRemoveItem = (item) => {
    removeFromCart(item);}

  const handleSubmit = ()=>{
    setTimeout(() => {
      window.location.reload();
    }, 1000);
    handleAlertShow("Product Successfully Purchased");
  }

    return(
        <div className={Cart["cart"]}>
      <h2>SHOPPING CART</h2>
      <hr className={Cart["hr"]}></hr>
      {cartItems.length === 0 ? (
          <></>
        ) : <button 
        className={Cart["buy-product"]} 
        onClick={handleSubmit}
       >Buy Now </button>}
      {showAlert && (
        <Alert variant="success" onClose={handleAlertClose} dismissible>
          {alertMessage}
        </Alert>
      )}
      <div className={Cart["cart-items"]}>
            {mergedArray.map(item => (
              <li key={item.transaction_id} className={Cart["cart-item"]}>
                <div className={Cart["product-image"]}>
                  <img src={item.image} alt={item.name} />
                </div>
                <div className={Cart["product-details"]}>
                  <h3>{item.name}</h3>
                  <p>IDR {item.price}</p>
                <button 
                className={Cart["delete-product"]}
                onClick={() => handleRemoveItem(item.id_product)}>Delete</button>
                </div>
              </li>
            ))}
            
      </div>
    </div>
    );
}

export default ShoppingCart;