import fitmanagerLogo from "../assets/logo-fitmanager.png";
import "../styles/Header.css";

export default function Header(props) {
  return (
    <div id="header">
      <h1 id="title">FitManager</h1>
      <img id="fitmanager-logo" src={fitmanagerLogo} alt="logo-fitmanager" />
    </div>
  );
}
