import {useEffect, useState } from "react";
import axios from "axios";
import TableCSS from './table_view.module.css';
import Cart from '../shoppingCart/shopping_cart.module.css';
import { FaSignOutAlt, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';



const UserTableView = () => {
    const [allUsers, setAllUsers] = useState([]);
    const navigate = useNavigate();
    axios.defaults.withCredentials = true;

    useEffect (()=>{
        const fetchData = async()=>{
            const res = await axios.get("http://localhost:3000/user/get");
            const getUser = res.data;
            console.log(getUser);
            setAllUsers(getUser.data);
          }
          fetchData();
        }, []);

    const handleBack = ()=>{
      navigate('/home/admin/:id');
    }

    const handleDeleteUser = async (userId) => {
        try {
          const res = await axios.post(`http://localhost:3000/user/delete?id_user=${userId}`);
          if(res.data.message === "Delete success"){
            window.location.reload();
            return;
          }
          console.log(allUsers);
        } catch (error) {
          console.log(error);
        }
      }

  return (
    <>
    <div className={TableCSS["table-container"]}>
    <button className={TableCSS["logout-button"]} onClick={handleBack}>
      <FaSignOutAlt className={TableCSS["logout-icon"]} /> Back
    </button>
        <h2 style={{
            textAlign: "center"
        }}>USER TABLE</h2>
        <hr className={Cart["hr"]}></hr>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Password</th>
            <th>Role</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
        {
          allUsers.map(user=>{
              return (
                <tr key={user.id_user}>
                  <td>{user.id_user}</td>
                  <td>{user.name}</td>
                  <td>{user.address}</td>
                  <td>{user.phone_number}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>{user.role}</td>
                  <button className={TableCSS["delete-button"]} onClick={() => handleDeleteUser(user.id_user)}>
                    DELETE
                  </button>
                </tr>
              );
          })
        } 
        </tbody>
       
      </table>
    </div>
    </>
  );
};

export default UserTableView;