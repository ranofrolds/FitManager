import "../styles/style.css";

export default function LandingPage(props) {
  return (
    <div id="landing-div">
      <h1 id="title">FitManager</h1>
      <h2 id="subtitle">
        <span>Bem</span>-<span>vindo</span> ao gerenciador do aplicativo do
        FitManager
      </h2>
      <div id="container-login">
        <h2>Login</h2>
        <form action="#">
          <div class="input-box">
            <span class="icon">
              <ion-icon name="mail-outline"></ion-icon>
            </span>
            <input type="email" required />
            <label>Email</label>
          </div>
          <div class="input-box">
            <span class="icon">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <input type="password" required />
            <label>Senha</label>
          </div>
          <div class="lembrar-senha">
            <label>
              <input type="checkbox" /> Lembre-se de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>
          <button type="submit" class="botao">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
