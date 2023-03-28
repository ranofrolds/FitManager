import { Link } from "react-router-dom";
import Cookies from 'js-cookie';

import "../styles/style.css";

const logout = () => {
  Cookies.remove('auth_token');
}

export default function Logout() {
  return (
    <Link to="/">
      <button id="logout-button" onClick={logout}>Sair</button>
    </Link>
  );
}
