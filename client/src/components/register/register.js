import './register.css'; 
import { useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect } from "react";
import axios from "axios";

const RegisterView = (props)=>{
    const statusReff = useRef();
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [role, setRole] = useState();
    const [id, setId] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [verifyPassword, setVerifyPassword] = useState();
    
    const handleSubmit = async (e, name, id, email, password, verifyPassword, role) => {
        e.preventDefault();
        if (password === verifyPassword) {
            if (id == undefined || id == '') return statusReff.current.innerHTML = `ID can be ${id}`; statusReff.current.style.color = "red";
            const res = await axios.post(`http://localhost:3000/register?name=${name}&id=${id}&email=${email}&password=${password}&role=${role}`);
            setRole(res.data.role);
            console.log("inin bro", role);
            console.log(id);
            if (res.data.message === "success" && role === "admin") {
                navigate(`/home/admin/${res.data.id}`);
            } else if(res.data.message === "success" && role === "user"){
                navigate("/");
            }else {
                statusReff.current.innerHTML = "ID or Email Already used!";
                statusReff.current.style.color = "red";
            }
        } else {
            statusReff.current.innerHTML = "Password doesn't match !";
            statusReff.current.style.color = "red";
        }
    }
    return (
        <section className='register-section'>
            <div className="form-box-register">
                <div className="form-value-register">
                    <form action="">
                        <h2>{props.selectedPage} As <span style = {{color : props.selectedRole === "Admin"? 'blueviolet' : 'black'}} ref={statusReff}>{props.selectedRole}</span></h2>
                        <div className="inputbox-register">
                            <input type="text" required = "true" onChange={(e) => { setId(e.target.value) }}/>
                            <label for="">Id Starts With P...</label>
                        </div>
                        <div className="inputbox-register">
                            <input type="text" required = "true" onChange={(e) => { setName(e.target.value) }}/>
                            <label for="">Name </label>
                        </div>
                        <div className="inputbox-register">
                            <input type="emali" required = "true" onChange={(e) => { setEmail(e.target.value) }}/>
                            <label for="">Email</label>
                        </div>
                        <div className="inputbox-register">
                            <input type="password" required = "true" onChange={(e) => { setPassword(e.target.value) }}/>
                            <label for="">Password</label>
                        </div>
                        <div className="inputbox-register">
                            <input type="password" required = "true" onChange={(e) => { setVerifyPassword(e.target.value) }}/>
                            <label for="">Confirm Your Password </label>
                        </div>
                        <button className = "loginbutton"onClick={(e) => { handleSubmit(e, name, id, email, password, verifyPassword, props.selectedRoleUser) }}>{props.selectedPage}</button>
                        <div className="back-to-login">
                            <i className = "fas fa-arrow-left"></i>
                            <a onClick={()=> navigate(`/${props.roleLoginPage}`)}> Back</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default RegisterView;