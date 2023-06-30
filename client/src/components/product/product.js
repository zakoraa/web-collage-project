import Product from './product.module.css';
import { RiSearchLine } from 'react-icons/ri';
import { useEffect, useState, useRef } from "react"
import axios from "axios"
import DeleteProduct from '../deleteProduct/delete_product';
import AddProduct from '../addProduct/add_product';
import UpdateProduct from '../updateProduct/update_product';


const ProductView = ({isAdmin})=>{
  const [isAddPopupOpen, setAddPopupOpen] = useState(false);
  const [isUpdatePopupOpen, setUpdatePopupOpen] = useState(false);
  const [isDeletePopupOpen, setDeletePopupOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [product, setProduct] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  axios.defaults.withCredentials = true;

  useEffect(() => {
    async function fetchData() {
        const res = await axios.get("http://localhost:3000/products");
        const getProduct = res.data
        setAllProducts(getProduct);
    }
    fetchData(); 
}, []);

  useEffect(() => {
    async function fetchData() {
        const res = await axios.get(`http://localhost:3000/products/search?find=${product}`);
        const getProduct = res.data
        setSearchInput(getProduct);
    }
    fetchData(); 
}, []);
  
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
      <button class={Product["search-button"]} onClick={showAddPopup}>Add Product</button>
      <button class={Product["search-button"]} onClick={showUpdatePopup}>Update Product</button>
      <button class={Product["search-button"]} onClick={showDeletePopup}>Delete Product</button>
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
                <div className={Product["product"]}>
                  <div className={Product["image"]}>
                    <img src={productMap.image} alt="Loading..."/>
                    </div>                   
                  <h3 style={{
                    height : 35
                  
                  }}>{productMap.name}</h3>
                  <p>IDR {productMap.price}</p>
                  {!isAdmin &&(
                    <button className={Product["add-to-cart"]}>Add To Cart</button>
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
