import './LoginPage.css'
import logoCCMV from '../../assets/icons/logoCCMV.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const LoginPage = () => {
    const [name, setName] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const login = async () => {
        try {
            const res = await fetch(`http://localhost:3000/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    password
                })
            });
            const data = await res.json();
            localStorage.setItem("usuario", JSON.stringify(data))
            navigate("/admin")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <div className="container d-flex align-items-center justify-content-center">
                <div class="login-container">
                    <img src={logoCCMV} alt="" />
                    <h2>Login</h2>
                    <div class="input-box">
                        <input type="text" onChange={(e) => setName(e.target.value)} required placeholder="Usuario" />
                    </div>

                    <div class="input-box">
                        <input type="password" required onChange={(e) => setPassword(e.target.value)} placeholder="Senha" />
                    </div>

                    <button onClick={login} class="btn">Entrar</button>

                </div>
            </div>
        </>
    )
}

export default LoginPage