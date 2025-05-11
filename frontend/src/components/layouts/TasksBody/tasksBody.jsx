import React, { useRef, useState } from "react";
import { CircleDashed, LoaderCircle, Circle, ChevronDown, CalendarClock } from "lucide-react";
import "./tasksBody.css"

const TasksBody = () => {
    const dateTimeInputRef = useRef(null);
    const [dateTimeValue, setDateTimeValue] = useState("");

    const handleIconClick = () => {
        if (dateTimeInputRef.current) {
            dateTimeInputRef.current.showPicker();
        }
    };

    const handleDateChange = (e) => {
        setDateTimeValue(e.target.value);
    };

    return (
        <>
            <div className="tasks-body">
                <div className="tasks-header">
                    <h2>
                        Tareas de hoy:
                    </h2>
                </div>

                <div className="tasks-body__form task">
                    <div className="form__statuses">
                        <span className="task__status task__status--pending"></span>
                        <span className="task__status task__status--in-progress"></span>
                        <span className="task__status task__status--done"></span>
                    </div>

                    <input
                        type="text"
                        placeholder="¿Cuál es tu siguiente tarea?"
                        className="form__input-title"
                    />

                    <div className="form__right-group">
                        <div className="form__input-datetime">
                            <input
                                ref={dateTimeInputRef}
                                type="datetime-local"
                                onChange={handleDateChange}
                                className="hidden-datetime-input"
                            />

                            {dateTimeValue && (
                                <span className="datetime-display">
                                    {new Date(dateTimeValue).toLocaleString("es-ES", {
                                        day: "2-digit",
                                        month: "short",
                                        hour: "2-digit",
                                        minute: "2-digit"
                                    })}
                                </span>
                            )}

                            <button
                                type="button"
                                onClick={handleIconClick}
                                className="calendar-button"
                            >
                                <CalendarClock size={18} />
                            </button>
                        </div>

                        <button className="form__submit-button">Agregar</button>
                    </div>
                </div>

                <div className="tasks-body__task-container">
                    <div className="task">
                        <span className="task__status task__status--pending"></span>
                        <span className="task__title">Work out</span>

                        <div className="task__right-group">
                            <span className="task__due-date">8:00 am</span>
                            <button className="task__action">
                                <CircleDashed size={18} />
                            </button>
                            <button className="task__action-expand">
                                <ChevronDown size={18} />
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
                                <CircleDashed size={18} />
                            </button>
                            <button className="task__action-expand">
                                <ChevronDown size={18} />
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
                                <CircleDashed size={18} />
                            </button>
                            <button className="task__action-expand">
                                <ChevronDown size={18} />
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
                                <CircleDashed size={18} />
                            </button>
                            <button className="task__action-expand">
                                <ChevronDown size={18} />
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
                                <CircleDashed size={18} />
                            </button>
                            <button className="task__action-expand">
                                <ChevronDown size={18} />
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
                                <CircleDashed size={18} />
                            </button>
                            <button className="task__action-expand">
                                <ChevronDown size={18} />
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