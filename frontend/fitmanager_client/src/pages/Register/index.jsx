import { Link } from "react-router-dom";
import { useState } from "react";
import Header from "../../components/Header.jsx";

import "../../styles/style.css";

export const Register = () => {
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
      <div id="main-div">
        <Header />
        <h2>Cadastro</h2>
      </div>
  );
};
