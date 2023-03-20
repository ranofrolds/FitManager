import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header.jsx";
import axios from "axios";

import "../../styles/style.css";

export const Register = () => {
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e)=>{
    console.log("TESTE")
    e.preventDefault();
    axios.post("http://localhost:8000/auth/signup", {
      cnpj: cnpj,
      name: name,
      email: email,
      password
    })
    .then((res)=>{
      console.log(res);
    })
    .catch((err)=>{
      console.log(err);
    });
  }

  return (
    <div id="main-div">
      <Header />
      <div id="container-login">
        <h2>Cadastro</h2>
        <form onSubmit={handleSubmit} action="#">
          <div class="input-box">
            <span class="icon">
              <ion-icon name="storefront-outline"></ion-icon>
            </span>
            <input type="text" required />
            <label>Nome da Academia</label>
          </div>

          <div class="input-box">
            <span class="icon">
              <ion-icon name="business-outline"></ion-icon>
            </span>
            <input type="text" required />
            <label>CNPJ</label>
          </div>

          <div class="input-box">
            <span class="icon">
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>

          <div class="input-box">
            <span class="icon">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <input type="password" required />
            <label>Senha</label>
          </div>

          <button type="submit" class="botao">
            Cadastrar
          </button>
          <div id="register-div">
            <p>
              <Link to="/"> Ja possuo uma conta </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
