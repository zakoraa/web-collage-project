import AddP from './add_product.module.css';
import { useState } from "react";
import axios from "axios";
import {v4 as uuidV4} from "uuid";

const AddProduct = ()=>{
    const [name, setName] = useState();
    const [price, setPrice] = useState();
    const [image, setImage] = useState();

    const handleSubmit = async (e, name, id_product, price, image) => {
        e.preventDefault();
            const res = await axios.post(`http://localhost:3000/products/add?name=${name}&id_product=${id_product}&price=${price}&image=${image}`);
            if (res.data.message === "success") {
              window.location.reload();
              return;
        }
      }
    return(
        <div className={AddP["cart"]}>
      <h2>Add Product</h2>
      <form className={AddP["form-container"]} >
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
      onClick={(e) =>{handleSubmit(e,  name,("B" + uuidV4()),price, image)}}>Add</button>
    </form>
      <div className={AddP["cart-items"]}>
      </div>
    </div>
    );
}

export default AddProduct;