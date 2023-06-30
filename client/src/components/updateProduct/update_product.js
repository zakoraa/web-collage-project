import AddP from "../addProduct/add_product.module.css";
import axios from "axios";
import { useState } from "react";

const UpdateProduct = ()=>{
  const [name, setName] = useState();
  const [id_product, setId] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();

  const handleSubmit = async (e, name, id_product, price, image) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/products/update?name=${name}&id_product=${id_product}&price=${price}&image=${image}`);
        if (res.data.message === "Update Success") {
          window.location.reload();
            return;
    }
  }
    return (
      <div className={AddP["cart"]}>
      <h2>Update Product</h2>
      <form className={AddP["form-container"]} >
      <div>
        <label className={AddP["label"]} htmlFor="id">Id :</label>
        <input type="text" id="id"className={AddP.inputText} 
        required = "true" onChange={(e) => { setId(e.target.value) }}/>
      </div>
      <div>
        <label className={AddP["label"]} htmlFor="name">Name :</label>
        <input type="text" id="name"className={AddP.inputText} 
        required = "true" onChange={(e) => { setName(e.target.value) }}/>
      </div>
      <div>
        <label className={AddP["label"]} htmlFor="price">Price :</label>
        <input type="text" id="price" className={AddP.inputText} 
        required = "true" onChange={(e) => { setPrice(e.target.value) }}/>
      </div>
      <div>
        <label className={AddP["label"]} htmlFor="image">Image :</label>
        <input type="text" id="image" className={AddP.inputText} 
        required = "true" onChange={(e) => { setImage(e.target.value) }}/>
      </div>
      <button type="submit" className={AddP["submit-button"]}
      onClick={(e) =>{handleSubmit(e,  name, id_product,price, image)}}>Update</button>
    </form>
      <div className={AddP["cart-items"]}>
      </div>
    </div>
    );
}

export default UpdateProduct;