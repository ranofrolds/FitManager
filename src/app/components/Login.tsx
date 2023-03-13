

export default function Login() {
    return(
    <div id="login">
        <h1>Login</h1>
        <label >
            Email:
            <br />
            <input type="email" />
        </label>
        <br />
        <br />
        <label>
            Senha:
            <br />
            <input type="password" />
        </label>
        <br />
        <br />
        <button id="botaoEntrar" type="submit">Entrar</button>
        <button id="botaoCadastrar" type="submit">Cadastrar</button>
    </div>
    )
}