import fitmanagerLogo from "../assets/logo-fitmanager.png";
import { Link } from "react-router-dom";

import "../styles/style.css";

export default function Header(props) {
  return (
    <div id="header">
      <h1 id="title">
        <Link to="/home">FitManager</Link>
      </h1>
      <img id="fitmanager-logo" src={fitmanagerLogo} alt="logo-fitmanager" />
    </div>
  );
}
