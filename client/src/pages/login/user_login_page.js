import LoginView from '../../components/login/login.js';

const UserLoginPage = ()=>{
    return (
        <LoginView selectedRole= "User" role = "Admin" selectedPage = "Log in"
        homePage = "home" roleLoginPage = "login/admin" roleRegisterPage = "register/user"/>
    );
}

export default UserLoginPage;