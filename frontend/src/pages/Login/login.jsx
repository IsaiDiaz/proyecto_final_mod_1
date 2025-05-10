import React from "react";
import { Mail, Lock, CheckCircle } from 'lucide-react';
import "./login.css";

const Login = () => {
    return (
        <div className="container container--column">
            <div className="container__header">
                <CheckCircle /> <span>Do-it</span>
            </div>
            <h1 className="container__title">
                Iniciar sesión
            </h1>

            <div className="container__body">
                <div className="icon-input">
                    <Mail />
                    <input type="text" placeholder="Email"/>
                </div>
                <div className="icon-input">
                    <Lock />
                    <input type="password" placeholder="Contraseña"/>
                </div>
                <button className="btn--primary">Iniciar Sesión</button>
                <p className="container__body-extra">
                    ¿No tienes cuenta? <a href="/register">Registrate</a>
                </p>
            </div>

        </div>
    );
};

export default Login;