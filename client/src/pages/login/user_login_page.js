import LoginView from "../../components/login/login";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserLoginPage = ()=>{
    return (
        <LoginView selectedRole= "User" role = "Admin" selectedPage = "Log in"
        homePage = "home" roleLoginPage = "login/admin" roleRegisterPage = "register"
        handleSubmit = ""/>
    );
}

export default UserLoginPage;