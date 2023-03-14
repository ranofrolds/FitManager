import "../styles/style.css";

export default function LandingPage(props) {
  return (
    <div id="landing-div">
      <h1 id="titulo">FitManager</h1>
      <h2 id="subtitulo">
        Bem-vindo ao gerenciador do aplicativo do FitManager
      </h2>
      <div id="botoes">
        <button type="submit" id="entrar">
          Entrar
        </button>
        <button type="submit" id="cadastrar">
          Cadastrar
        </button>
      </div>
    </div>
  );
}
