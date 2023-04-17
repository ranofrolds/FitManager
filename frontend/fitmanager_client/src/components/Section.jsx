import { Link } from "react-router-dom";

import "../styles/style.css";

export default function Section(props) {
  return (
    <div class="section-div">
      <h1 class="section-title">
        <Link to={props.link}>
          <button>{props.title}</button>
        </Link>
      </h1>
    </div>
  );
}
