import { Link } from "react-router-dom";

import "../styles/style.css";

export default function Logout() {
  return (
    <Link to="/">
      <button id="logout-button">Sair</button>
    </Link>
  );
}
