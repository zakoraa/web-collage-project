import AddP from "../addProduct/add_product.module.css";
import { useState } from "react";
import axios from "axios";

const DeleteProduct = ()=>{
  const [id_product, setIdProduct] = useState();

    const handleSubmit = async (e, id_product) => {
        e.preventDefault();
            const res = await axios.post(`http://localhost:3000/products/delete?id_product=${id_product}`);
            console.log(id_product);
            if (res.data.message === "Delete success") {
              window.location.reload();
              return;
        }
    }
    return (
        <>
        <h2 
          style={
            {
                paddingTop : 30
            }
          }
        >Delete Product</h2>
      <form className={AddP["form-container"]} >
      <div>
        <label className={AddP["label"]} htmlFor="id"
        >ID :</label>
        <input type="text" id="id"className={AddP.inputText}
        onChange={(e) => {setIdProduct(e.target.value) }} />
      </div>
      <button type="submit" className={AddP["submit-button"]}
      onClick={(e) =>{handleSubmit(e, id_product)}}
      >Delete</button>
    </form>
      <div className={AddP["cart-items"]}>
      </div>
      </>
    );
}

export default DeleteProduct;