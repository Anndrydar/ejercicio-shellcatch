import React, { useState } from 'react';
import axios from 'axios';
import './login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:9000/app/login', {
                email,
                password,
            });

            if (response.data.token) {
                localStorage.setItem('token-galeria', response.data.token);
                alert('Login exitoso:');
                window.location.href = '/inicio'; 
            } else {
                setError(response.data.error);
            }
        } catch (error) {
            setError('Error de conexión o error en el servidor.');
        }
    };

    return (
        <div className="container">
            <h2>Iniciar Sesión</h2>
            <form onSubmit={handleLogin}>
                <label className="label" htmlFor="email">Correo Electrónico</label>
                <input 
                    type="email" 
                    className="input-field" 
                    id="email" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                
                <label className="label" htmlFor="password">Contraseña</label>
                <input 
                    type="password" 
                    className="input-field" 
                    id="password" 
                    required 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                
                <button type="submit" className="button">Iniciar Sesión</button>
                {error && <p className="error-message">{error}</p>} {/* Mensaje de error */}
            </form>
        </div>
    );
};

export default Login;