export default function Login() {
    return(
    <div>
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
        <button type="submit">Login</button>
    </div>
    )
}