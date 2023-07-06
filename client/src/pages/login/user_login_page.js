import LoginView from "../../components/login/login";
import UserIdContext from '../../provider/provider';
import {useState } from "react";

const UserLoginPage = ()=>{
    return (
            <LoginView selectedRole= "User" role = "Admin" selectedPage = "Log in"
        homePage = "home" roleLoginPage = "login/admin" roleRegisterPage = "register" 
        handleSubmit = "" toRegister = "Don't have an account?"/>
        
    );
}

export default UserLoginPage;