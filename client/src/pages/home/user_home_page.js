import {useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import HomeUser from'./user_home.module.css';
import ShoppingCart from "../../components/shoppingCart/shopping_cart";
import ProductView from "../../components/product/product";


function UserHomePage() {
    const [login, setLogin] = useState('');
    const navigate = useNavigate();
    const [cartItems, setCartItems] = useState([]);

    const removeFromCart = (item) => {
      const updatedCartItems = cartItems.filter((cartItem) => cartItem.id_product !== item);
      setCartItems(updatedCartItems);
    };

    axios.defaults.withCredentials = true;
    const isAdmin = false;
  

    const handleLogout = () => {
        navigate('/');
    };


    // useEffect(() =>{
    //     try{
    //       axios.post("http://localhost:3000/auth")
    //           .then((res) => {
    //               setLogin(res.data.login);
    //               console.log(res.data.login);
    //               if (res.data.message === "logout success") return navigate("/");
    //       })
    //       .catch((error) => {
    //           console.error("Error: ", error);
    //           navigate("/");
    //         });
    //     }catch(error){
    //       console.log(error);
    //     }
    // },[navigate]);

      return (
        <section>
        <div className={HomeUser["container"]}>
            <div className={HomeUser["products"]}>
            <button className={HomeUser["logout-button"]} onClick={handleLogout}>
      <FaSignOutAlt className={HomeUser["logout-icon"]} /> Logout
    </button>
            <ProductView 
            isAdmin = {isAdmin}
            cartItems={cartItems} setCartItems={setCartItems}/>
            </div>
        <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} className={HomeUser["cart"]}/>
        
        </div>  
    </section>
      );

        
        
}

export default UserHomePage;