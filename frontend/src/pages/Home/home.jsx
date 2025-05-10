import React from "react";

const Home = () => {
    return (
        <div className="container--row">
            <div className="container__icon">

            </div>
            <h1 className="container__title">
                Bienvenido a Task Manager
            </h1>

            <div className="container__body">
                <p>
                    Aquí puedes gestionar tus tareas de manera eficiente.
                </p>
                <button className="btn--primary">Empezar</button>
                <p>
                    ¿No tienes cuenta? <a href="/register">Regístrate</a>
                </p>
                <p>
                    ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
                </p>
            </div>

        </div>
    );
}

export default Home;