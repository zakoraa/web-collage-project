import Product from './product.module.css';
import {useEffect, useState } from "react";
import axios from "axios";
import HomeAdmin from '../../pages/home/home.module.css'
import DeleteProduct from '../deleteProduct/delete_product';
import AddProduct from '../addProduct/add_product';
import UpdateProduct from '../updateProduct/update_product';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';

const ProductView = ({isAdmin, cartItems, setCartItems})=>{
  const { id } = useParams();
  const [isAddPopupOpen, setAddPopupOpen] = useState(false);
  const [isUpdatePopupOpen, setUpdatePopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [isInfoPopupOpen, setInfoPopupOpen] = useState(false);
  const [selectedIdProduct, setSelectedIdProduct] = useState(null);
  const [allProducts, setAllProducts] = useState([]);
  const [allTransaction, setAllTransaction] = useState([]);
  axios.defaults.withCredentials = true;

    useEffect (()=>{
        const fetchData = async()=>{
            const res = await axios.get("http://localhost:3000/transaction/get");
            const getTransaction = res.data;
            console.log(getTransaction.data);
            setAllTransaction(getTransaction.data);
          }
          fetchData();
        }, []);
  
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get("http://localhost:3000/products");
      const getProduct = res.data;
      setAllProducts(getProduct);
    }
    fetchData(); 
  }, []);

  const handleAddToCart = async(e,idUserFK, idProductFK,totalPrice)=>{
    e.preventDefault();
    const res = await axios.post(`http://localhost:3000/transaction/add?id_userFK=${idUserFK}&id_productFK=${idProductFK}&total_price=${totalPrice}`);
    await axios.post(`http://localhost:3000/userhasproduct/add?id_userFK=${idUserFK}&id_productFK=${idProductFK}`);
    if(res.data.message === "Add Transaction Success"){
      console.log(res.data.result);
      return;
    }
}



  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };
  const handleBuyProducts = (product, e,idUserFK, idProductFK,totalPrice)=>{
    handleAddToCart(e,idUserFK, idProductFK,totalPrice);
    addToCart(product);

  }

  const removeFromCart = (product) => {
    const updatedCartItems = cartItems.filter((item) => item.id_product !== product.id_product);
    setCartItems(updatedCartItems);
  };
  
  const showAddPopup = () => {
    setAddPopupOpen(true);
  };

  const hideAddPopup = () => {
    setAddPopupOpen(false);
  };

  const showUpdatePopup = () => {
    setUpdatePopupOpen(true);
  };

  const hideUpdatePopup = () => {
    setUpdatePopupOpen(false);
  };

  const showDeletePopup = () => {
    setDeletePopupOpen(true);
  };

  const hideDeletePopup = () => {
    setDeletePopupOpen(false);
  };
  const showInfoPopup = (idProduct) => {
    setInfoPopupOpen(true);
    setSelectedIdProduct(idProduct);
  };

  const hideInfoPopup = () => {
    setInfoPopupOpen(false);
    setSelectedIdProduct(null);
  };



return(
<div className={Product["container"]}>
    <div className={Product["products"]}>
      <h2 style={{
        marginTop : 30
      }}>ASUS OFFICIAL STORE</h2>
      {!isAdmin && (
        <div style={{
          marginTop : 70
        }}></div>
      )}
      {isAdmin && (<div style={{display:'flex' ,flexWrap : 'wrap', alignItems : 'center', justifyContent: 'center', marginTop : 30, marginBottom : 20, marginLeft : 30}}>
      <div className={Product["header"]}>
        <hr className={HomeAdmin["hr"]}></hr>
        <div className={Product["header-submit"]}>
        <button class={Product["search-button"]} onClick={showAddPopup}>Add Product</button>
        <button class={Product["search-button"]} onClick={showUpdatePopup}>Update Product</button>
        <button class={Product["search-button"]} onClick={showDeletePopup}>Delete Product</button>
        </div>
        
        <hr className={HomeAdmin["hr"]}></hr>
      </div>
      </div>)}
      {isAddPopupOpen && (
        <div className={Product["search-overlay"]}>
          <div className={Product["search-popup"]}>
            <span className={Product["close"]} onClick={hideAddPopup}>&times;</span>
          <AddProduct/>
        </div>
        </div>
        // <h3>Search Product</h3>
        // <div className={Product["search-form"]}>
        // <input className = {Product["search-input"]} type="text" placeholder="  Seacrh Product" 
        // onChange={(e) => {setProduct(e.target.value) }}/>
        // <button className={Product["search-submit"]}>Submit</button>
      )}
      {isUpdatePopupOpen && (
        <div className={Product["search-overlay"]}>
          <div className={Product["search-popup"]}>
            <span className={Product["close"]} onClick={hideUpdatePopup}>&times;</span>
          <UpdateProduct />
        </div>
        </div>
      )}
      {isDeletePopupOpen && (
        <div className={Product["search-overlay"]}>
          <div className={Product["search-popup"]}>
            <span className={Product["close"]} onClick={hideDeletePopup}>&times;</span>
          <DeleteProduct />
        </div>
        </div>
      )}
      <div className={Product["product-box"]}>
        {
          allProducts.map((productMap, index)=>{
              return (
                <div className={Product["product"]} key={index}>
                  {isAdmin &&(
                          <FontAwesomeIcon className = {Product["info"]} icon={faEllipsisV} size="lg" color="black" onClick={() => showInfoPopup(productMap.id_product)} />
                  )}
                 {isInfoPopupOpen && selectedIdProduct === productMap.id_product && (
                    <div className={Product["search-overlay"]}>
                      <div className={Product["search-popup"]}>
                        <span className={Product["close"]} onClick={hideInfoPopup}>&times;</span>
                        <h2>ID : {productMap.id_product}</h2>
                      </div>
                    </div>
                  )}
                  <div className={Product["image"]}>
                    <img src={productMap.image} alt="Loading..."/>
                    </div>                   
                  <h3 style={{
                    height : 35
                  
                  }}>{productMap.name}</h3>
                  <p>IDR {productMap.price}</p>
                  {!isAdmin &&(
                    <button className={Product["add-to-cart"]}
                    // onClick={() => addToCart(productMap)}
                    onClick={(e)=>handleBuyProducts(productMap, e,id, productMap.id_product,productMap.price)}
                    >Add To Cart</button>
                  )}
                   </div>
              );
          })
        } 
      </div>
    </div>
    
  </div>

  
);
}

export default ProductView;
