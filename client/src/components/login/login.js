import './login.css'; 
import {useNavigate}  from 'react-router-dom';
import { useState, useContext } from "react";
import axios from "axios";
import UserIdContext from '../../provider/provider';

const LoginView = (props)=>{
    const navigate = useNavigate();
    const { setUserId } = useContext(UserIdContext);
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
        const userId = res.data.id;
        setUserId(userId);
        console.log("ininlo ",userId);
        console.log("bang ",res.data);
        if (res.data.message === "success" && res.data.role === "user") {
            navigate(`/home/${userId}`);
        }else if(res.data.message === "success" && res.data.role === "admin") {
            navigate(`/home/admin/${userId}`);
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

                         <div className = "to-register">
                           <a onClick={()=> navigate(`/${props.roleRegisterPage}`)}>{props.toRegister}</a>
                       </div> 
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