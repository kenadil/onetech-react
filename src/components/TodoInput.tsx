import React from "react";

export interface IAddTodoButtonProps {
    onSubmit: (s: string) => void;
  }

export const TodoInput: React.FC<IAddTodoButtonProps> = ({onSubmit}) => {
    const [input, setInput] = React.useState("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!input.trim()) { return; }
        setInput("");
        onSubmit(input);
    }
    
    const onInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
        setInput(e.currentTarget.value);
    }

    return (
        <form className="TodoInpute" onSubmit={handleSubmit}>
            <h1>Todo</h1>
            <input
                type="text"
                name="todo"
                placeholder="Todo"
                value={input}
                onChange={onInputChange}
            />
            <button type="submit">Add Todo</button>
        </form>
    )
}