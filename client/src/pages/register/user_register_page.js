import RegisterView from "../../components/register/register.js";
import axios from 'axios';  
import { useNavigate } from 'react-router-dom';

const UserRegisterPage =()=>{
    const navigate = useNavigate();
    // axios.defaults.withCredentials = true;
    // axios.post("http://localhost:3000/auth")
    //     .then((res) => {
    //         if (res.data.login) navigate("/home");
    //         return;
    //     })
    return (
        <RegisterView selectedRole= "User" role = "Admin" selectedPage = "Register"
        homePage = "home" roleLoginPage = "" roleRegisterPage = "register/" />
    );
}

export default UserRegisterPage;