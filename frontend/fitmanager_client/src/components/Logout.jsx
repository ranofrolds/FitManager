import { Link } from "react-router-dom";
import Cookies from "js-cookie";

import "../styles/style.css";

const logout = () => {
  Cookies.remove("auth_token");
};

export default function Logout() {
  const user = "SUBSTITUIR AQUI";
  return (
    <div class="logout-div">
      <div class="logout-text">Olá, {user}</div>
      <Link to="/">
        <button id="logout-button" onClick={logout}>
          Sair
        </button>
      </Link>
    </div>
  );
}
