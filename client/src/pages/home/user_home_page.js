import {useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaUser } from 'react-icons/fa';
import HomeUser from'./user_home.module.css';
import ShoppingCart from "../../components/shoppingCart/shopping_cart";
import ProductView from "../../components/product/product";
import Product from "../../components/product/product.module.css";
import UpdateUser from "../../components/updateUser/update_user";
import UserIdContext from '../../provider/provider';

function UserHomePage() {
  const [userId, setUserId] = useState("");
    const [login, setLogin] = useState('');
    const [isUpdatePopupOpen, setUpdatePopupOpen] = useState(false);
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
  
    const showUpdatePopup = () => {
      setUpdatePopupOpen(true);
    };

    const hideUpdatePopup = () => {
      setUpdatePopupOpen(false);
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
    {/* <button class={HomeUser["update-button"]} onClick={showUpdatePopup}><FaUser size={18} color="white" style={{
      marginRight: 10,
      alignItems : "center",
      justifyContent : "center",
      display : "flex"
    }} className="custom-icon" />Update Your Data</button> */}
    {/* <>{isUpdatePopupOpen && (
        <div className={Product["search-overlay"]}>
          <div className={Product["search-popup"]}>
            <span className={Product["close"]} onClick={hideUpdatePopup}>&times;</span>
        <UserIdContext.Provider value={{ userId, setUserId }}>
          
          <UpdateUser />
        </UserIdContext.Provider>

        </div>
        </div>)}</> */}
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