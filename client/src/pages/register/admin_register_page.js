import RegisterView from "../../components/register/register.js";

const AdminRegisterPage =()=>{
    return (
        <RegisterView selectedRole= "Admin" role = "User" selectedPage = "Register"
        homePage = "home" roleLoginPage = "" roleRegisterPage = "register/user" />
    );
}

export default AdminRegisterPage;