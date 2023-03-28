import Header from "../../components/Header";
import Section from "../../components/Section";

import "../../styles/style.css";

export const Home = () => {
  return (
    <div id="main-div">
      <Header />
      <h3>Menu</h3>
      <div class="section-grid">
        <Section title="Financeiro" link="/financial" />
        <Section title="Manutenção" link="/maintenance" />
        <Section title="Alunos" link="/customers" />
        <Section title="Funcionários" link="/workers" />
      </div>
    </div>
  );
};
