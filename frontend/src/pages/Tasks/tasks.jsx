import React from "react";
import "./tasks.css"
import { useParams } from "react-router-dom";
import Navbar from "../../components/layouts/Navbar/navbar";
import TasksBody from "../../components/layouts/TasksBody/tasksBody";

const Tasks = () => {

    const { userId } = useParams();

    console.log(userId)

    return (
        <div className="task-layout">
            <Navbar/>
            <TasksBody/>
        </div>
    );
};

export default Tasks