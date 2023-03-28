import Section from "../../components/Section";
import Header from "../../components/Header";

import "../../styles/style.css";

export const Workers = () => {
  return (
    <div id="main-div">
      <Header />
      <div class="white-box">
        <h3>Funcionários</h3>
        <div class="section-grid">
          <Section title="Limpeza" />
          <Section title="Personais" />
          <Section title="Administração" />
          <Section title="Manuteção" />
        </div>
      </div>
    </div>
  );
};
