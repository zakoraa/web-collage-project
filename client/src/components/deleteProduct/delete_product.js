import AddP from "../addProduct/add_product.module.css";
import { useState } from "react";
import axios from "axios";

const DeleteProduct = ()=>{
  const [name, setName] = useState();

    const handleSubmit = async (e, name) => {
        e.preventDefault();
            const res = await axios.post(`http://localhost:3000/products/delete?name=${name}`);
            console.log(name);
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
        <label className={AddP["label"]} htmlFor="name"
        >Name :</label>
        <input type="text" id="name"className={AddP.inputText}
        onChange={(e) => {setName(e.target.value) }} />
      </div>
      <button type="submit" className={AddP["submit-button"]}
      onClick={(e) =>{handleSubmit(e, name)}}
      >Delete</button>
    </form>
      <div className={AddP["cart-items"]}>
      </div>
      </>
    );
}

export default DeleteProduct;