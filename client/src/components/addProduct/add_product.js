import AddP from './add_product.module.css';
import UpdateProduct from '../updateProduct/update_product'
import DeleteProduct from '../deleteProduct/delete_product';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from "react";
import { FaSignOutAlt } from 'react-icons/fa';
import axios from "axios";

const AddProduct = ()=>{
  const statusReff = useRef();
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [id_product, setId] = useState();
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
      const handleLogout = () => {
            navigate('/');
        };
    return(
        <div className={AddP["cart"]}>
      <h2>Add Product</h2>
      <form className={AddP["form-container"]} >
      <div>
        <label htmlFor="id">Id :</label>
        <input type="text" id="id"className={AddP.inputText} 
        required = "true" onChange={(e) => { setId(e.target.value) }}/>
      </div>
      <div>
        <label htmlFor="name">Name :</label>
        <input type="text" id="name"className={AddP.inputText} 
        required = "true" onChange={(e) => { setName(e.target.value) }}/>
      </div>
      <div>
        <label htmlFor="price">Price :</label>
        <input type="text" id="price" className={AddP.inputText} 
        required = "true" onChange={(e) => { setPrice(e.target.value) }}/>
      </div>
      <div>
        <label htmlFor="image">Image :</label>
        <input type="text" id="image" className={AddP.inputText} 
        required = "true" onChange={(e) => { setImage(e.target.value) }}/>
      </div>
      <button type="submit" className={AddP["submit-button"]}
      onClick={(e) =>{handleSubmit(e,  name,id_product,price, image)}}>Add</button>
    </form>
      <div className={AddP["cart-items"]}>
      </div>
      <UpdateProduct />
      <DeleteProduct />
    </div>
    );
}

export default AddProduct;