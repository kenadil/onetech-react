import React from "react";
import "./Todo.css";
import { ITodoElementProps } from "../services/interfaces/TodoElementProps";

export const TodoElement: React.FC<ITodoElementProps> = ({completed, text, onClick}) => {
    return (
        <li
            onClick={ onClick }
            className={completed ? "completed" : undefined}
        >
            {text}
        </li>
    )
}