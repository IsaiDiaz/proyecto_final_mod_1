import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";
import { Calendar, CalendarCheck } from "lucide-react";

export function Navbar (){
    const today_task_icon = document.getElementById("today_tasks_icon")
    const all_task_icon = document.getElementById("all_tasks_icon")

    const handleAllTasks = () => {
        all_task_icon.classList.add("element__icon--selected")
        today_task_icon.classList.remove("element__icon--selected")
    }

    const handleTodayTasks = () => {
        today_task_icon.classList.add("element__icon--selected")
        all_task_icon.classList.remove("element__icon--selected")
    }



    return (
        <div className="navbar">
            <div className="navbar__header">
                
                <div className="navbar__heaeder-title">
                    <h1>Do-it</h1>
                    <p>Manage your tasks efficiently</p>
                </div>
            </div>
            <hr />
            <div className="navbar__body">
                <div className="navbar__body-element">
                    <Calendar className="element__icon" id="today_tasks_icon"/>
                    <button className="element__button" onClick={handleTodayTasks}>
                        Tareas de hoy
                    </button>
                </div>
                <div className="navbar__body-element">
                    <CalendarCheck className="element__icon" id="all_tasks_icon"/>
                    <button className="element__button" onClick={handleAllTasks}>
                        Todas las tareas
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar;