import React from "react";
import * as State from "../services/state/todoState";
import { TodoElement } from "./TodoElement";

export interface ITodoListProps {
    todos: State.Todos;
    onTodoClick: (id: number) => void;
}

const TodoList: React.FC<ITodoListProps> = ({todos, onTodoClick}) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoElement key={todo.id} {...todo}
                    onClick={() => onTodoClick(todo.id)}
                />
            ))}
        </ul>
    )
}

export default TodoList;