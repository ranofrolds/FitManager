import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header.jsx";
import axiosInstance from "../../instances/axiosInstances.jsx";
import Cookies from "js-cookie";

import "../../styles/style.css";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post("/auth/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        const thirtyMinutes = 30 * 60 * 1000; // em milissegundos
        const expirationDate = new Date(Date.now() + thirtyMinutes);

        const token = res.data.token;

        Cookies.set("auth_token", token, { expires: expirationDate });

        console.log(res);

        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="main-div">
      <Header />
      <h2 id="subtitle">
        <span>Bem</span>-<span>vindo</span> ao seu sistema de gerenciamento de
        academias!
      </h2>
      <div id="container-login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} action="#">
          <div class="input-box">
            <span class="icon">
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <input
              className={email !== "" ? "has-val input" : "input"}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div class="input-box">
            <span class="icon">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <input
              className={password !== "" ? "has-val input" : "input"}
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Senha</label>
          </div>
          <div class="remember-forgot">
            <label>
              <input type="checkbox" /> Lembre-se de mim
            </label>
            <a href>Esqueceu a senha?</a>
          </div>
          <button type="submit" class="botao">
            <Link class="escrita-botao" className="text-white">
              Entrar
            </Link>
          </button>
          <div id="register-div">
            <p>
              Não tem uma conta? <Link to="./register"> Cadastre-se </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};
