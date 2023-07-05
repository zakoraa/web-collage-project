import AddP from "../addProduct/add_product.module.css";
import axios from "axios";
import { useState } from "react";

const UpdateProduct = ()=>{
  const [name, setName] = useState();
  const [id_product, setId] = useState();
  const [price, setPrice] = useState();
  const [image, setImage] = useState();

  const handleSubmitAll= async (e, name, id_product, price,image) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/products/updateall?name=${name}&id_product=${id_product}&price=${price}&image=${image}`);
        if (res.data.message === "Update Success") {
          window.location.reload();
          return;
    }
  }
  const handleSubmitName = async (e, id_product,name ) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/products/updatename?name=${name}&id_product=${id_product}`);
        console.log("name ",name,id_product); 
        if (res.data.message === "Update Success") {
          window.location.reload();
          return;
    }
  }
  const handleSubmitPrice = async (e,id_product, price) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/products/updateprice?id_product=${id_product}&price=${price}`);
        console.log("price ",id_product, price);
        if (res.data.message === "Update Success") {
          window.location.reload();
          return;
    }
  }
  const handleSubmitImage = async (e, id_product, image) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/products/updateimage?id_product=${id_product}&image=${image}`);
        console.log("image ",id_product, image);
        if (res.data.message === "Update Success") {
          window.location.reload();
          return;
    }
  }

 console.log( "all ",name, id_product, price,image);
    return (
      <div className={AddP["cart"]}>
      <h2>Update Product</h2>
      <form className={AddP["form-container"]} >
      <p style={{
        marginTop : 20
      }}>Type Id that you want to update :</p>

      <div>
        <label className={AddP["label"]} htmlFor="id">Id :</label>
        <input type="text" id="id"className={AddP.inputText}  
         onChange={(e) => { setId(e.target.value) }}/>
      </div>
      <p style={{
        marginTop : 10
      }}>Update Data:</p>
      <div>
        <label className={AddP["label"]} htmlFor="name">Name :</label>
        <div className = {AddP["input-button"]}>
        <input type="text" id="name" className={AddP.inputText}  
         onChange={(e) => { setName(e.target.value) }}/>
          <button  className={AddP["submit-right"]}
      type="button" onClick={(e) =>{handleSubmitName(e, id_product,name)}}
      >Update Name</button>
        </div>
      </div>
      <div>
        <label className={AddP["label"]} htmlFor="price">Price :</label>
        <div className = {AddP["input-button"]}>
        <input type="text" id="price" className={AddP.inputText}  
         onChange={(e) => { setPrice(e.target.value) }}/>
          <button  className={AddP["submit-right"]}
      type="button" onClick={(e) =>{handleSubmitPrice(e, id_product,price)}}
      >Update Price</button>
        </div>
      </div>
      <div>
        <label className={AddP["label"]} htmlFor="image">Image :</label>
        <div className = {AddP["input-button"]}>
        <input type="text" id="image" className={AddP.inputText}  
         onChange={(e) => { setImage(e.target.value) }}/>
          <button  className={AddP["submit-right"]}
     type="button" onClick={(e) =>{handleSubmitImage(e, id_product,image)}}
      >Update Image</button>
        </div>
      </div>
      <button type="submit" className={AddP["submit-button"]}
      onClick={(e) =>{handleSubmitAll(e,  name, id_product,price, image)}}>Update</button>
    </form>
      <div className={AddP["cart-items"]}>
      </div>
    </div>
    );
}

export default UpdateProduct;