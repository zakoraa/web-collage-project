import './login.css'; 
import { useNavigate } from 'react-router-dom';

const LoginView = (props)=>{
    const navigate = useNavigate();
    return (
        <section>
            <div className="form-box">
                <div className="form-value">
                    <form action="">
                        <h2>{props.selectedPage} As <span style = {{color : props.selectedRole === "Admin"? 'blueviolet' : 'black'}}>{props.selectedRole}</span> </h2>
                        <div className="inputbox">
                            <input type="text" required/>
                            <label for="">Email</label>
                        </div>
                        <div className="inputbox">
                            <input type="password" required/>
                            <label for="">Password </label>
                        </div>
                        <button className = "loginbutton"onClick={()=> navigate(`/${props.rolePage}`)}>{props.selectedPage}</button>
                        <div className = "to-register">
                            <a onClick={()=> navigate(`/${props.roleRegisterPage}`)}>Don't have an account?</a>
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