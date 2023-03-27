import { Link } from "react-router-dom";
import axios from "axios";

import Header from "../../components/Header";
import Section from "../../components/Section";

import "../../styles/style.css";

export const Home = () => {
  return (
    <div id="main-div">
      <Header />
      <Section />
    </div>
  );
};
