import Cart from './shopping_cart.module.css';

const ShoppingCart = ()=>{
    return(
        <div className={Cart["cart"]}>
      <h2>SHOPPING CART</h2>
      <div className={Cart["cart-items"]}>
      </div>
    </div>
    );
}

export default ShoppingCart;