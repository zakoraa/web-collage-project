import AddP from "../addProduct/add_product.module.css";

const UpdateProduct = ()=>{
    return (
        <>
        <h2 style={
            {
                paddingTop : 30
            }
        }>Update Product</h2>
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
      <button type="submit" className={AddP["submit-button"]}>Update</button>
    </form>
      <div className={AddP["cart-items"]}>
      </div>
      </>
    );
}

export default UpdateProduct;