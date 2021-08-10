import { useContext, useState } from 'react';
import UserContext from '../context/UserContext';
import './Login.css';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const contextObject = useContext(UserContext)

    function doLogin(e) {
        e.preventDefault();

        if (email !== "joel@example.org") {
            alert("Invalid email");
            return;
        }

        contextObject.setUser({ id: 1, email, name: "Joel Peltonen" });
    }

    return (
        <form className="loginform" onSubmit={doLogin}>
            <input
                type="text"
                placeholder="E-mail"
                value={email}
                name="email"
                onChange={(event) => setEmail(event.target.value)}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                disabled={password.length === 0}
                type="submit"
            >
                Login
            </button>
        </form>
    );
}

export default Login;
