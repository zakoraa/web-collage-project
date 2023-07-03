import LoginView from '../../components/login/login.js';

const AdminLoginPage = ()=>{
    const isAdmin = true;
    return (
        <LoginView selectedRole= "Admin" role = "User" selectedPage = "Log in"
        homePage = "home" roleLoginPage = "" isAdmin = {isAdmin} roleRegisterPage = "login/admin"
        handleSubmit = "login/admin"/>
    );
}

export default AdminLoginPage;