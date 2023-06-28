import AddP from './add_product.module.css';

const AddProduct = ()=>{
    return(
        <div className={AddP["cart"]}>
      <h2>ADD PRODUCT</h2>
      <div className={AddP["cart-items"]}>
      </div>
    </div>
    );
}

export default AddProduct;