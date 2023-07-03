import './login.css'; 
import {useNavigate}  from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const LoginView = (props,{isAdmin})=>{
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    axios.defaults.withCredentials = true;
    // axios.post("http://localhost:3000/auth")
    //     .then((res) => {
    //         if (res.data.login) navigate("/home");
    //     });

    const handleSubmit = async (e, email, password) => {
        e.preventDefault();
        console.log(email);
        console.log(password);
        const res = await axios.post(`http://localhost:3000/?email=${email}&password=${password}`);
        console.log(res.data.id);
        if (res.data.message === "success" && res.data.role === "user") {
            navigate(`/home/${res.data.id}`);
        }else if(res.data.message === "success" && res.data.role === "admin") {
            // setUser(res.data.id.toString());
            navigate(`/home/admin/${res.data.id}`);
        }
    }
    return (
        <section className='login-section'>
            <div className="form-box">
                <div className="form-value">
                    <form action="">
                        <h2> {props.selectedPage} As <span style = {{color : props.selectedRole === "Admin"? 'blueviolet' : 'black'}}>{props.selectedRole}</span> </h2>
                        <div className="inputbox">
                            <input onChange={(e) => {setEmail(e.target.value) }} type="email"/>
                            <label for="">Email</label>
                        </div>
                        <div className="inputbox">
                            <input onChange={(e) => {setPassword(e.target.value) }}  type="password"/>
                            <label for="">Password </label>
                        </div>
                        <button onClick={(e) => { handleSubmit(e, email, password) }} className = "loginbutton">{props.selectedPage}</button>
                        {!isAdmin &&(
                           <div className = "to-register">
                           <a onClick={()=> navigate(`/${props.roleRegisterPage}`)}>Don't have an account?</a>
                       </div> 
                        )}
                        <div className="switch-role">
                            <a onClick={()=> navigate(`/${props.roleLoginPage}`)}>{props.selectedPage} as {props.role} </a>
                            <i className= "fas fa-arrow-right"></i>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default LoginView;