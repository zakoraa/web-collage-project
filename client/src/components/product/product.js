import Product from './product.module.css';
import { RiSearchLine } from 'react-icons/ri';
import { useEffect, useState, useRef } from "react"
import axios from "axios"


const ProductView = ({isAdmin})=>{
  const [isSearchPopupOpen, setSearchPopupOpen] = useState(false);
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
  
  const showSearchPopup = () => {
    setSearchPopupOpen(true);
  };

  const hideSearchPopup = () => {
    setSearchPopupOpen(false);
  };

return(
<div className={Product["container"]}>
    <div className={Product["products"]}>
      <h2>ASUS OFFICIAL STORE</h2>
      <div style={{display:'flex' ,flexWrap : 'wrap', alignItems : 'center', justifyContent: 'center', marginTop : 30, marginBottom : 20, marginLeft : 30}}>
      <button class={Product["search-button"]} onClick={showSearchPopup}>Add Product</button>
      <button class={Product["search-button"]} onClick={showSearchPopup}>Update Product</button>
      <button class={Product["search-button"]} onClick={showSearchPopup}>Delete Product</button>
      </div>
      {isSearchPopupOpen && (
        <div className={Product["search-overlay"]}>
          <div className={Product["search-popup"]}>
            <span className={Product["close"]} onClick={hideSearchPopup}>&times;</span>
            <h3>Search Product</h3>
            <div className={Product["search-form"]}>
            <input className = {Product["search-input"]} type="text" placeholder="  Seacrh Product" 
            onChange={(e) => {setProduct(e.target.value) }}/>
            <button className={Product["search-submit"]}>Submit</button>
          </div>
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
