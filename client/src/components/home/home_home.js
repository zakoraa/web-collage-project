import { useEffect, useState, useRef} from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

import ProductView from "../product/product";



const HomeView = ()=>{
    const [users, setUsers] = useState("Sign In");
    const navigate = useNavigate();
    const handleLogout = () => {
        axios.get("http://localhost:3000/logout")
            .then((res) => {
                navigate('/');
                // console.log(res.data.message);
                // if (res.data.message === "logout success") {
                //     window.location.reload();
                    
                // }
            })
    }
    return(<section>   
            <ProductView/>
    </section>

);
}

export default HomeView;
