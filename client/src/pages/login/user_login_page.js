import LoginView from "../../components/login/login";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLoginPage = ()=>{
    const isAdmin = false;
    return (
    
            <LoginView selectedRole= "User" role = "Admin" selectedPage = "Log in"
        homePage = "home" roleLoginPage = "login/admin" roleRegisterPage = "register" isAdmin = {isAdmin}
        handleSubmit = ""/>
        
        
    );
}

export default UserLoginPage;