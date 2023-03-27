import "../styles/style.css";

export default function Section(props) {
  return (
    <div class="section-div">
      <h1 class="section-title">{props.title}</h1>
    </div>
  );
}
