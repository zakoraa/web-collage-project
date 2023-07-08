import './register.css'; 
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";
import { Alert } from 'react-bootstrap';
import {v4 as uuidV4} from "uuid";

const RegisterView = (props)=>{
    const [showAlertFailed, setShowAlertFailed] = useState(false);
    const [alertMessageFailed, setAlertMessageFailed] = useState('');
    const [showAlertSuccess, setShowAlertSuccess] = useState(false);
    const [alertMessageSuccess, setAlertMessageSuccess] = useState('');
    const navigate = useNavigate();
    const [name, setName] = useState();
    const [role, setRole] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [verifyPassword, setVerifyPassword] = useState();
    
    const handleAlertCloseFailed = () => {
        setShowAlertFailed(false);
      };
    
      const handleAlertShowFailed = (message) => {
        setShowAlertFailed(true);
        setAlertMessageFailed(message);
      };
    const handleAlertCloseSuccess = () => {
        setShowAlertSuccess(false);
      };
    
      const handleAlertShowSuccess = (message) => {
        setShowAlertSuccess(true);
        setAlertMessageSuccess(message);
      };

    const handleSubmit = async (e, name, id, email, password, verifyPassword, role) => {
        e.preventDefault();
        if (password === verifyPassword) {
            if (id == undefined || id == '' || email == undefined || email == '' || password == undefined || password == '' || name == undefined || name == '' || verifyPassword == undefined || verifyPassword == '' ) {
                setTimeout(() => {
                        setShowAlertFailed(false);          
                    }, 3000);
                    handleAlertShowFailed(`Please fill in the data !`);     
                }
            const res = await axios.post(`http://localhost:3000/register?name=${name}&id=${id}&email=${email}&password=${password}&role=${role}`);
            setRole(res.data.role);
            console.log("inin bro", role);
            console.log(id);
            if (res.data.message === "success" && role === "admin") {
                setTimeout(() => {
                    setShowAlertSuccess(false); 
                    window.location.reload();         
                }, 3000);
                handleAlertShowSuccess("Register Success");
            } else if(res.data.message === "success" && role === "user"){
                navigate("/");
            }else {
                setTimeout(() => {
                    setShowAlertFailed(false);          
                }, 3000);
                handleAlertShowFailed("ID or Email Already used!");
            }
        } else {
            setTimeout(() => {
                setShowAlertFailed(false);          
            }, 3000);
            handleAlertShowFailed("Password doesn't match !");
        }
    }
    return (
        <section className='register-section'>
            <div className="form-box-register">
                <div className="form-value-register">
                    <form action="">
                        <h2>{props.selectedPage} As <span style = {{color : props.selectedRole === "Admin"? 'blueviolet' : 'black'}}>{props.selectedRole}</span></h2>
                        <>
                            {showAlertFailed && (
                                <Alert variant="danger" onClose={handleAlertCloseFailed} dismissible>
                                {alertMessageFailed}
                                </Alert>
                            )}
                        </>
                        <>
                            {showAlertSuccess && (
                                <Alert variant="success" onClose={handleAlertCloseSuccess} dismissible>
                                {alertMessageSuccess}
                                </Alert>
                            )}
                        </>
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
                        <button className = "loginbutton"onClick={(e) => { handleSubmit(e, name, (props.roleId + uuidV4()), email, password, verifyPassword, props.selectedRoleUser) }}>{props.selectedPage}</button>
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