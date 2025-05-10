import React from "react";
import axios from "axios";
import { Mail, Lock, CheckCircle, User} from 'lucide-react';

const Register = () => {

    const createUser = () => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const confirm_password = document.getElementById("confirm_password").value;

        if (password !== confirm_password) {
            alert("Las contraseñas no coinciden");
            return;
        }

        axios.post("http://127.0.0.1:3000/api/user", {
            name,
            email,
            password
        })
        .then(response => {
            alert("Usuario creado con éxito");
            window.location.href = "/login";
        })
        .catch(error => {
            console.error("Error al crear el usuario", error);
            alert("Error al crear el usuario");
        });
    }

    return (
        <div className="container container--column">
            <div className="container__header">
                <CheckCircle /> <span>Do-it</span>
            </div>
            <h1 className="container__title">
                Crear cuenta
            </h1>

            <div className="container__body">
                <div className="icon-input">
                    <User />
                    <input type="text" placeholder="Nombre completo" id="name"/>
                </div>
                <div className="icon-input">
                    <Mail />
                    <input type="text" placeholder="Email" id="email"/>
                </div>
                <div className="icon-input">
                    <Lock />
                    <input type="password" placeholder="Contraseña" id="password"/>
                </div>
                <div className="icon-input">
                    <Lock />
                    <input type="password" placeholder="Confirmar contraseña"id="confirm_password"/>
                </div>
                <button className="btn--primary" onClick={createUser}>Crear cuenta</button>
                <p className="container__body-extra">
                    ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
                </p>
            </div>

        </div>
    );
}

export default Register;