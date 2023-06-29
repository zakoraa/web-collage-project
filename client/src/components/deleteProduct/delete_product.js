import AddP from "../addProduct/add_product.module.css";

const DeleteProduct = ()=>{
    return (
        <>
        <h2>Update Product</h2>
      <form className={AddP["form-container"]} >
      <div>
        <label htmlFor="name">Name :</label>
        <input type="text" id="name"className={AddP.inputText} />
      </div>
      <button type="submit" className={AddP["submit-button"]}>Update</button>
    </form>
      <div className={AddP["cart-items"]}>
      </div>
      </>
    );
}

export default DeleteProduct;