import React from "react";
import "./Todo.css";

interface ITodoElementProps {
    completed: boolean;
    text: string;
    onClick: () => void;
}

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