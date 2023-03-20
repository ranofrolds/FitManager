import { Link } from "react-router-dom";
import Header from "../../components/Header.jsx";

import "../../styles/style.css";

export const Login = () => {
  return (
    <div id="main-div">
      <Header />
      <h2 id="subtitle">
        <span>Bem</span>-<span>vindo</span> ao seu sistema de gerenciamento de
        academias!
      </h2>
      <div id="container-login">
        <h2>Login</h2>
        <form action="#">
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
          <div class="remember-forgot">
            <label>
              <input type="checkbox" /> Lembre-se de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <button type="submit" class="botao">
            Entrar
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
