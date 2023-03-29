import Header from "../../components/Header";
import Logout from "../../components/Logout";
import Crud from "../../components/Crud";

import "../../styles/style.css";

export const Customers = () => {
  return (
    <div id="main-div">
      <Header />
      <Logout />
      <div class="white-box">
        <h3>Alunos</h3>
        <Crud title="Listagem de alunos" />
      </div>
    </div>
  );
};
