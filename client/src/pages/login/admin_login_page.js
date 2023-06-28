import LoginView from '../../components/login/login.js';

const AdminLoginPage = ()=>{
    return (
        <LoginView selectedRole= "Admin" role = "User" selectedPage = "Log in"
        homePage = "home" roleLoginPage = "" roleRegisterPage = "register/admin"
        handleSubmit = "login/admin"/>
    );
}

export default AdminLoginPage;