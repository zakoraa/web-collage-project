import RegisterView from "../../components/register/register.js";

const UserRegisterPage =()=>{
    return (
        <RegisterView selectedRole= "User" role = "Admin" selectedPage = "Register"
        homePage = "home" roleLoginPage = "" roleRegisterPage = "register/admin" />
    );
}

export default UserRegisterPage;