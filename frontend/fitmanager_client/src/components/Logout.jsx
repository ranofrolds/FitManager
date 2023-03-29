import { useState } from 'react';
import { Link } from "react-router-dom";
import Cookies from "js-cookie";
import axiosInstance from '../instances/axiosInstances';

import "../styles/style.css";


const logout = () => {
  Cookies.remove("auth_token");
};


export default function Logout() {
  const token = Cookies.get("auth_token");
  
  if(token){
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const decodedPayload = JSON.parse(atob(base64));
    
    const id=decodedPayload.id;

    axiosInstance
      .get(`/users/${id}`)
      .then((res) => {
        setUser('Olá, '+res.data.name)
      })
      .catch((err) => {
        console.log(err)
      });
  
  }
  
  const [user, setUser] = useState('');
  return (
    <div class="logout-div">
      <div class="logout-text">{user}</div>
      <Link to="/">
        <button id="logout-button" onClick={logout}>
          Sair
        </button>
      </Link>
    </div>
  );
}
