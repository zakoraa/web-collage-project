import Product from './product.module.css';
import React,{ useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';

const ProductView = ()=>{
  const [isSearchPopupOpen, setSearchPopupOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [searchType, setSearchType] = useState('id');

  const showSearchPopup = () => {
    setSearchPopupOpen(true);
  };

  const hideSearchPopup = () => {
    setSearchPopupOpen(false);
  };

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const handleSearchSubmit = () => {
    // Lakukan logika pencarian berdasarkan input yang diberikan
    console.log('Search Type: ', searchType);
    console.log('Search Input: ', searchInput);
  };

    return(
<div className={Product["container"]}>
    <div className={Product["products"]}>
      <h2>ASUS OFFICIAL STORE</h2>
      <button class={Product["search-button"]} onClick={showSearchPopup}><RiSearchLine />  Seacrh</button>
      {isSearchPopupOpen && (
        <div className={Product["search-overlay"]}>
          <div className={Product["search-popup"]}>
            <span className={Product["close"]} onClick={hideSearchPopup}>&times;</span>
            <h3>Search</h3>
            <div className={Product["search-form"]}>
            <input className = {Product["search-input"]} type="text" placeholder="  Seacrh Product" />
              <select className={Product["search-type"]} value={searchType} onChange={handleSearchTypeChange}>
                <option value="id">ID</option>
                <option value="namaProduk">Product's Name</option>
              </select>
            <button className={Product["search-submit"]}>Submit</button>
          </div>
        </div>
        </div>
      )}
      <div className={Product["product-box"]}>
        <div className={Product["product"]}>
          <img src="https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120546.jpg" alt="Product 1"/>
          <h3>Product 1</h3>
          <p>Price: $10</p>
          <button className={Product["add-to-cart"]}>Add To Cart</button>
        </div>
        <div className={Product["product"]}>
          <img src="https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120546.jpg" alt="Product 2"/>
          <h3>Product 2</h3>
          <p>Price: $15</p>
          <button className={Product["add-to-cart"]}>Add To Cart</button>
        </div>
        <div className={Product["product"]}>
          <img src="https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120546.jpg" alt="Product 2"/>
          <h3>Product 2</h3>
          <p>Price: $15</p>
          <button className={Product["add-to-cart"]}>Add To Cart</button>
        </div>
        <div className={Product["product"]}>
          <img src="https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120546.jpg" alt="Product 2"/>
          <h3>Product 2</h3>
          <p>Price: $15</p>
          <button className={Product["add-to-cart"]}>Add To Cart</button>
        </div>
        <div className={Product["product"]}>
          <img src="https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120546.jpg" alt="Product 2"/>
          <h3>Product 2</h3>
          <p>Price: $15</p>
          <button className={Product["add-to-cart"]}>Add To Cart</button>
        </div>
        <div className={Product["product"]}>
          <img src="https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120546.jpg" alt="Product 2"/>
          <h3>Product 2</h3>
          <p>Price: $15</p>
          <button className={Product["add-to-cart"]}>Add To Cart</button>
        </div>
        
      </div>
    </div>
    
  </div>

  
);
}

export default ProductView;
