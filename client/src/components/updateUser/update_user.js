import AddP from '../addProduct/add_product.module.css';
import axios from "axios";
import { useState,useContext } from "react";
import UserIdContext from '../../provider/provider';
import { Alert } from 'react-bootstrap';

const UpdateUser = ()=>{
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const { userId } = useContext(UserIdContext);
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [phone_number, setPhoneNumber] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  
  const handleAlertClose = () => {
    setShowAlert(false);
  };

  const handleAlertShow = (message) => {
    setShowAlert(true);
    setAlertMessage(message);
  };

  const handleSubmitAll= async (e, name, userId, address,phone_number, email, password) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/user/updateall?name=${name}&id_user=${userId}&address=${address}&phone_number=${phone_number}&email=${email}&password=${password}`);
        if (res.data.message === "Update Success") {
        handleAlertShow("Update All Success");
          return;
    }
  }
  const handleSubmitName = async (e, userId,name ) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/user/updatename?name=${name}&id_user=${userId}`);
        console.log("name ",name,userId); 
        if (res.data.message === "Update Success") {
          handleAlertShow("Update Name Success");
          return;
    }
  }
  const handleSubmitAddress = async (e,userId, address) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/user/updateaddress?id_user=${userId}&address=${address}`);
        console.log("address ",userId, address);
        if (res.data.message === "Update Success") {
        handleAlertShow("Update Address Success");
          return;
    }
  }
  const handleSubmitPhoneNumber = async (e, userId, phone_number) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/user/updatephone?id_user=${userId}&phone_number=${phone_number}`);
        console.log("phone_number ",userId, phone_number);
        if (res.data.message === "Update Success") {
        handleAlertShow("Update Phone Number Success");
          return;
    }
  }
  const handleSubmitEmail = async (e, userId, email) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/user/updateemail?id_user=${userId}&email=${email}`);
        console.log("email ",userId, email);
        if (res.data.message === "Update Success") {
        handleAlertShow("Update Email Success");
          return;
    }
  }
  const handleSubmitPassword = async (e, userId, password) => {
    e.preventDefault();
        const res = await axios.post(`http://localhost:3000/user/updatepassword?id_user=${userId}&password=${password}`);
        console.log("password ",userId, password);
        if (res.data.message === "Update Success") {
        handleAlertShow("Update Password Success");
          return;
    }
  }

 console.log( "all ",name, userId, address,phone_number);
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
      type="button" onClick={(e) =>{handleSubmitName(e, userId,name)}}
      >Update Name</button>
        </div>
      </div>
      <div>
        <label className={AddP["label"]} htmlFor="address">Address :</label>
        <div className = {AddP["input-button"]}>
        <input type="text" id="address" className={AddP.inputText}  
         onChange={(e) => { setAddress(e.target.value) }}/>
          <button  className={AddP["submit-right"]}
      type="button" onClick={(e) =>{handleSubmitAddress(e, userId,address)}}
      >Update Address</button>
        </div>
      </div>
      <div>
        <label className={AddP["label"]} htmlFor="phone_number">Phone Number :</label>
        <div className = {AddP["input-button"]}>
        <input type="text" id="phone_number" className={AddP.inputText}  
         onChange={(e) => { setPhoneNumber(e.target.value) }}/>
          <button  className={AddP["submit-right"]}
     type="button" onClick={(e) =>{handleSubmitPhoneNumber(e, userId,phone_number)}}
      >Update Number</button>
        </div>
      </div>
      <div>
        <label className={AddP["label"]} htmlFor="email">Email :</label>
        <div className = {AddP["input-button"]}>
        <input type="text" id="email" className={AddP.inputText}  
         onChange={(e) => { setEmail(e.target.value) }}/>
          <button  className={AddP["submit-right"]}
     type="button" onClick={(e) =>{handleSubmitEmail(e, userId,email)}}
      >Update Email</button>
        </div>
      </div>
      <div>
        <label className={AddP["label"]} htmlFor="password">Password :</label>
        <div className = {AddP["input-button"]}>
        <input type="text" id="password" className={AddP.inputText}  
         onChange={(e) => { setPassword(e.target.value) }}/>
          <button  className={AddP["submit-right"]}
     type="button" onClick={(e) =>{handleSubmitPassword(e, userId,password)}}
      >Update Password</button>
        </div>
      </div>
      <button type="submit" className={AddP["submit-button"]}
      onClick={(e) =>{handleSubmitAll(e,  name, userId,address, phone_number)}}>Update All</button>
    </form>
    {showAlert && (
        <Alert variant="success" onClose={handleAlertClose} dismissible>
          {alertMessage}
        </Alert>
      )}
    </div>
    );
}

export default UpdateUser;