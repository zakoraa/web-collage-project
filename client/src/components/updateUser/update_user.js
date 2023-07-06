import AddP from '../addProduct/add_product.module.css';
import axios from "axios";
import { useEffect,useState,useContext } from "react";
import UserIdContext from '../../provider/provider';

const UpdateUser = ()=>{
    const userIdContext  = useContext(UserIdContext);
    // const userId = useContext(UserIdContext);
    const [name, setName] = useState();
    const [id_user, setId] = useState();
    const [address, setAddress] = useState();
    const [phone_number, setPhoneNumber] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

  const handleSubmitAll= async (e, name, id_user, address,phone_number, email, password) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/user/updateall?name=${name}&id_user=${id_user}&address=${address}&phone_number=${phone_number}&email=${email}&password=${password}`);
        if (res.data.message === "Update Success") {
          window.location.reload();
          return;
    }
  }
  const handleSubmitName = async (e, id_user,name ) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/user/updatename?name=${name}&id_user=${id_user}`);
        console.log("name ",name,id_user); 
        if (res.data.message === "Update Success") {
          window.location.reload();
          return;
    }
  }
  const handleSubmitAddress = async (e,id_user, address) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/user/updateaddress?id_user=${id_user}&address=${address}`);
        console.log("address ",id_user, address);
        if (res.data.message === "Update Success") {
          window.location.reload();
          return;
    }
  }
  const handleSubmitPhoneNumber = async (e, id_user, phone_number) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/user/updatephone_number?id_user=${id_user}&phone_number=${phone_number}`);
        console.log("phone_number ",id_user, phone_number);
        if (res.data.message === "Update Success") {
          window.location.reload();
          return;
    }
  }
  const handleSubmitEmail = async (e, id_user, email) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/user/updateemail?id_user=${id_user}&email=${email}`);
        console.log("email ",id_user, email);
        if (res.data.message === "Update Success") {
          window.location.reload();
          return;
    }
  }
  const handleSubmitPassword = async (e, id_user, password) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/user/updatepassword?id_user=${id_user}&password=${password}`);
        console.log("password ",id_user, password);
        if (res.data.message === "Update Success") {
          window.location.reload();
          return;
    }
  }

 console.log( "all ",name, id_user, address,phone_number);
    return (
      <div className={AddP["cart"]}>
      <h2>Update Your Data</h2>
      <form className={AddP["form-container"]} >
      <div>
        <label className={AddP["label"]} htmlFor="name">Name :</label>
        <div className = {AddP["input-button"]}>
        <input type="text" id="name" className={AddP.inputText}  
         onChange={(e) => { setName(e.target.value) }}/>
          <button  className={AddP["submit-right"]}
      type="button" onClick={(e) =>{handleSubmitName(e, userIdContext.userId,name)}}
      >Update Name</button>
        </div>
      </div>
      <div>
        <label className={AddP["label"]} htmlFor="address">Address :</label>
        <div className = {AddP["input-button"]}>
        <input type="text" id="address" className={AddP.inputText}  
         onChange={(e) => { setAddress(e.target.value) }}/>
          <button  className={AddP["submit-right"]}
      type="button" onClick={(e) =>{handleSubmitAddress(e, userIdContext.userId,address)}}
      >Update Address</button>
        </div>
      </div>
      <div>
        <label className={AddP["label"]} htmlFor="phone_number">Phone Number :</label>
        <div className = {AddP["input-button"]}>
        <input type="text" id="phone_number" className={AddP.inputText}  
         onChange={(e) => { setPhoneNumber(e.target.value) }}/>
          <button  className={AddP["submit-right"]}
     type="button" onClick={(e) =>{handleSubmitPhoneNumber(e, userIdContext.userId,phone_number)}}
      >Update Number</button>
        </div>
      </div>
      <div>
        <label className={AddP["label"]} htmlFor="email">Email :</label>
        <div className = {AddP["input-button"]}>
        <input type="text" id="email" className={AddP.inputText}  
         onChange={(e) => { setEmail(e.target.value) }}/>
          <button  className={AddP["submit-right"]}
     type="button" onClick={(e) =>{handleSubmitEmail(e, userIdContext.userId,email)}}
      >Update Email</button>
        </div>
      </div>
      <div>
        <label className={AddP["label"]} htmlFor="password">Password :</label>
        <div className = {AddP["input-button"]}>
        <input type="text" id="password" className={AddP.inputText}  
         onChange={(e) => { setPassword(e.target.value) }}/>
          <button  className={AddP["submit-right"]}
     type="button" onClick={(e) =>{handleSubmitPassword(e, userIdContext.userId,password)}}
      >Update Password</button>
        </div>
      </div>
      <button type="submit" className={AddP["submit-button"]}
      onClick={(e) =>{handleSubmitAll(e,  name, userIdContext.userId,address, phone_number)}}>Update All</button>
    </form>
      <div className={AddP["cart-items"]}>
      </div>
    </div>
    );
}

export default UpdateUser;