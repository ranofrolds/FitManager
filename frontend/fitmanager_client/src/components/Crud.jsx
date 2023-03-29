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
      .post("/api/exercise", {
        name: name,
        age: age,
        phone: phone,
        instructor: instructor,
        plan: plan,
      })
      .then((response) => {
        console.log(response.data);
        navigate("/customers");
      })
      .catch((error) => {
        console.log(error.response.data);
      });
  };

  return (
    <div class="crud-div">
      <button type="button" data-toggle="modal" data-target="#myModal">
        Launch modal
      </button>
      <div class="modal" tabindex="-1" role="dialog">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{props.title}</h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
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
              </form>
            </div>
            <div class="modal-footer">
              <button type="submit" id="save-button" onClick={handleSubmit}>
                Salvar
              </button>
              <button type="submit" id="cancel-button">
                Cancelar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
