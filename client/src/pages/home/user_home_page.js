import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import HomeView from '../../components/home/home';
import HomeAdmin from'./home.module.css';
import ShoppingCart from "../../components/shoppingCart/shopping_cart";
import ProductView from "../../components/product/product";


function UserHomePage() {
    const [login, setLogin] = useState('');
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

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
        <div className={HomeAdmin["container"]}>
            <div className={HomeAdmin["products"]}>
            <ProductView />
            </div>
        <ShoppingCart className={HomeAdmin["cart" ]}/>
        
        </div>  
    </section>
      );

        
        
}

export default UserHomePage;