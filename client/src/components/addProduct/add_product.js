import AddP from './add_product.module.css';
import UpdateProduct from '../updateProduct/update_product'
import DeleteProduct from '../deleteProduct/delete_product';

const AddProduct = ()=>{
    return(
        <div className={AddP["cart"]}>
      <h2>Add Product</h2>
      <form className={AddP["form-container"]} >
      <div>
        <label htmlFor="name">Name :</label>
        <input type="text" id="name"className={AddP.inputText} />
      </div>
      <div>
        <label htmlFor="price">Price :</label>
        <input type="text" id="price" className={AddP.inputText} />
      </div>
      <div>
        <label htmlFor="image">Picture :</label>
        <input type="text" id="image" className={AddP.inputText} />
      </div>
      <button type="submit" className={AddP["submit-button"]}>Add</button>
    </form>
      <div className={AddP["cart-items"]}>
      </div>
      <UpdateProduct />
      <DeleteProduct />

    </div>
    );
}

export default AddProduct;