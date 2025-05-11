import React from "react";
import { CircleDashed, LoaderCircle, Circle, ChevronDown } from "lucide-react";
import "./tasksBody.css"

const TasksBody = () => {

    return (
        <>
            <div className="tasks-body">
                <div className="tasks-header">
                    <h2>
                        Tareas de hoy:
                    </h2>
                </div>

                <div className="tasks-body__task-container">
                    <div className="task">
                        <span className="task__status task__status--pending"></span>
                        <span className="task__title">Work out</span>

                        <div className="task__right-group">
                            <span className="task__due-date">8:00 am</span>
                            <button className="task__action">
                                <CircleDashed size={18}/>
                            </button>
                            <button className="task__action-expand">
                                <ChevronDown size={18}/>
                            </button>
                        </div>
                        <p className="task__description"></p>
                    </div>
                    <div className="task">
                        <span className="task__status task__status--pending"></span>
                        <span className="task__title">Work out</span>

                        <div className="task__right-group">
                            <span className="task__due-date">8:00 am</span>
                            <button className="task__action">
                                <CircleDashed size={18}/>
                            </button>
                            <button className="task__action-expand">
                                <ChevronDown size={18}/>
                            </button>
                        </div>
                        <p className="task__description"></p>
                    </div>
                    <div className="task">
                        <span className="task__status task__status--pending"></span>
                        <span className="task__title">Work out</span>

                        <div className="task__right-group">
                            <span className="task__due-date">8:00 am</span>
                            <button className="task__action">
                                <CircleDashed size={18}/>
                            </button>
                            <button className="task__action-expand">
                                <ChevronDown size={18}/>
                            </button>
                        </div>
                        <p className="task__description"></p>
                    </div>
                    <div className="task">
                        <span className="task__status task__status--pending"></span>
                        <span className="task__title">Work out</span>

                        <div className="task__right-group">
                            <span className="task__due-date">8:00 am</span>
                            <button className="task__action">
                                <CircleDashed size={18}/>
                            </button>
                            <button className="task__action-expand">
                                <ChevronDown size={18}/>
                            </button>
                        </div>
                        <p className="task__description"></p>
                    </div>
                    <div className="task">
                        <span className="task__status task__status--pending"></span>
                        <span className="task__title">Work out</span>

                        <div className="task__right-group">
                            <span className="task__due-date">8:00 am</span>
                            <button className="task__action">
                                <CircleDashed size={18}/>
                            </button>
                            <button className="task__action-expand">
                                <ChevronDown size={18}/>
                            </button>
                        </div>
                        <p className="task__description"></p>
                    </div>
                    <div className="task">
                        <span className="task__status task__status--pending"></span>
                        <span className="task__title">Work out</span>

                        <div className="task__right-group">
                            <span className="task__due-date">8:00 am</span>
                            <button className="task__action">
                                <CircleDashed size={18}/>
                            </button>
                            <button className="task__action-expand">
                                <ChevronDown size={18}/>
                            </button>
                        </div>
                        <p className="task__description"></p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TasksBody