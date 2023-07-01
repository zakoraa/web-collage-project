import Cart from './shopping_cart.module.css';


const ShoppingCart = ({cartItems, removeFromCart})=>{
  const handleRemoveItem = (item) => {
    removeFromCart(item);
  };

    return(
        <div className={Cart["cart"]}>
      <h2>SHOPPING CART</h2>
      <hr className={Cart["hr"]}></hr>
      {cartItems.length === 0 ? (
          <></>
        ) : <button 
        className={Cart["buy-product"]}
       >Buy Now</button>}
     
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
                onClick={() => handleRemoveItem(item.id_product)}>Delete</button>
                </div>
              </li>
            ))}
            
      </div>
    </div>
    );
}

export default ShoppingCart;