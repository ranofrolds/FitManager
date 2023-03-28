import Header from "../../components/Header";
import Logout from "../../components/Logout";

import "../../styles/style.css";

export const Maintenance = () => {
  return (
    <div id="main-div">
      <Header />
      <Logout />
      <div class="white-box">
        <h3>Manutenção</h3>
      </div>
    </div>
  );
};
