import Header from "../../components/Header";
import Section from "../../components/Section";
import Logout from "../../components/Logout";

import "../../styles/style.css";

export const Home = () => {
  return (
    <div id="main-div">
      <Header />
      <Logout />
      <div class="white-box">
        <h3>Menu</h3>
        <div class="section-grid">
          <Section title="Financeiro" link="/financial" />
          <Section title="Manutenção" link="/maintenance" />
          <Section title="Alunos" link="/customers" />
          <Section title="Funcionários" link="/workers" />
        </div>
      </div>
    </div>
  );
};
