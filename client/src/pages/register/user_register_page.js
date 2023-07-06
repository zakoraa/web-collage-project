import RegisterView from "../../components/register/register.js";

const UserRegisterPage =()=>{
    // axios.defaults.withCredentials = true;
    // axios.post("http://localhost:3000/auth")
    //     .then((res) => {
    //         if (res.data.login) navigate("/home");
    //         return;
    //     })
    return (
        <RegisterView selectedRole= "User" role = "Admin" selectedPage = "Register"
        homePage = "home" roleLoginPage = "" roleRegisterPage = "register/" selectedRoleUser = "user" />
    );
}

export default UserRegisterPage;