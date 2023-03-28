import { Link } from "react-router-dom";
import axios from "axios";

import Header from "../../components/Header";
import Section from "../../components/Section";

import "../../styles/style.css";

export const Home = () => {
  return (
    <div id="main-div">
      <Header />
      <h3>Menu</h3>
      <div class="section-grid">
        <Section title="Financeiro" />
        <Section title="Manutenção" />
        <Section title="Alunos" />
        <Section title="Funcionários" link="/workers" />
      </div>
    </div>
  );
};
