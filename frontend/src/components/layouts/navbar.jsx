import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";

export function Navbar (){
    return (
        <div className="navbar">
            <div className="navbar__header">
                <img src="" alt="" className="navbar__header-img"/>
                <div className="navbar__heaeder-title">
                    <h1>Task Manager</h1>
                    <p>Manage your tasks efficiently</p>
                </div>
            </div>
            <div className="navbar__body">
                <div className="navbar__body-element">
                    <i className="element__icon"></i>
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                </div>
                <div className="navbar__body-element">
                    <i className="element__icon"></i>
                    <Link to="/">
                        <p>Home</p>
                    </Link>
                </div>
            </div>
        </div>
    )
}