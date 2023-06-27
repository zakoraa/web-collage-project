import './register.css'; 
import { useNavigate } from 'react-router-dom';

const RegisterView = (props)=>{
    const navigate = useNavigate();
    return (
        <section>
            <div className="form-box-register">
                <div className="form-value-register">
                    <form action="">
                        <h2>{props.selectedPage} As <span style = {{color : props.selectedRole === "Admin"? 'blueviolet' : 'black'}}>{props.selectedRole}</span></h2>
                        <div className="inputbox-register">
                            <input type="text" required/>
                            <label for="">Name</label>
                        </div>
                        <div className="inputbox-register">
                            <input type="text" required/>
                            <label for="">Address </label>
                        </div>
                        <div className="inputbox-register">
                            <input type="text" required/>
                            <label for="">Email</label>
                        </div>
                        <div className="inputbox-register">
                            <input type="text" required/>
                            <label for="">No Handphone</label>
                        </div>
                        <div className="inputbox-register">
                            <input type="password" required/>
                            <label for="">Password </label>
                        </div>
                        <button className = "loginbutton"onClick={()=> navigate(`/${props.rolePage}`)}>{props.selectedPage}</button>
                        <div className="back-to-login">
                            <i className = "fas fa-arrow-left"></i>
                            <a onClick={()=> navigate(`/${props.roleLoginPage}`)}> Back to Login</a>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default RegisterView;