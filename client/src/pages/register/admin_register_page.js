import RegisterView from "../../components/register/register.js";
import Axios from 'axios';  
import { useNavigate } from 'react-router-dom';

const AdminRegisterPage =()=>{
    const navigate = useNavigate();
    Axios.defaults.withCredentials = true;
    // Axios.post("http://localhost:3000/auth/admin")
    //     .then((res) => {
    //         if (res.data.login) navigate("/home");
    //         return;
    //     })
    return (
        <RegisterView selectedRole= "Admin" role = "User" selectedPage = "Register"
        homePage = "home" roleLoginPage = "home/admin/:id" roleRegisterPage = "home/admin" />
    );
}

export default AdminRegisterPage;