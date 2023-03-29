import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axiosInstance from "../instances/axiosInstances";

import "../styles/style.css";

export default function Crud(props) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [instructor, setInstructor] = useState("");
  const [plan, setPlan] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      /*não sei o que botar aqui copiei do login*/
      .post("/auth/login", {
        name: name,
        age: age,
        phone: phone,
        instructor: instructor,
        plan: plan,
      })
      .then((res) => {
        const thirtyMinutes = 30 * 60 * 1000; // em milissegundos
        const expirationDate = new Date(Date.now() + thirtyMinutes);

        const token = res.data.token;

        Cookies.set("auth_token", token, { expires: expirationDate });

        console.log(res);

        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div class="crud-div">
      <div class="crud-overlay">
        <div class="crud-content">
          <h1 class="crud-title">{props.title}</h1>
          <div class="crud-form">
            <form onSubmit={handleSubmit} action="#">
              <div class="input-box">
                <span class="icon">
                  <ion-icon name="text-outline"></ion-icon>
                </span>
                <input
                  className={name !== "" ? "has-val input" : "input"}
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label>Nome</label>
              </div>

              <div class="input-box">
                <span class="icon">
                  <ion-icon name="today-outline"></ion-icon>
                </span>
                <input
                  className={age !== "" ? "has-val input" : "input"}
                  type="number"
                  required
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <label>Idade</label>
              </div>

              <div class="input-box">
                <span class="icon">
                  <ion-icon name="call-outline"></ion-icon>
                </span>
                <input
                  className={phone !== "" ? "has-val input" : "input"}
                  type="string"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <label>Celular</label>
              </div>

              <div class="input-box">
                <span class="icon">
                  <ion-icon name="person-outline"></ion-icon>
                </span>
                <input
                  className={instructor !== "" ? "has-val input" : "input"}
                  type="string"
                  required
                  value={instructor}
                  onChange={(e) => setInstructor(e.target.value)}
                />
                <label>Instrutor</label>
              </div>

              <div class="input-box">
                <span class="icon">
                  <ion-icon name="cash-outline"></ion-icon>
                </span>
                <input
                  className={plan !== "" ? "has-val input" : "input"}
                  type="string"
                  required
                  value={plan}
                  onChange={(e) => setPlan(e.target.value)}
                />
                <label>Plano</label>
              </div>
              <button type="submit" id="save-button">
                Salvar
              </button>
              <button type="submit" id="cancel-button">
                Cancelar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
