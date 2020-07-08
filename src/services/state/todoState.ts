import { ITodo } from "../interfaces/Todo";

export type Todos = ITodo[];

let initialId: number = 0;

const generateTodo = (id: number, text: string): ITodo => {
    return {
        completed: false,
        id,
        text
    };
};

export const generateTodos = (text: string[]): ITodo[] => {
    return text.map(t => {
        const res = generateTodo(initialId, t);
        initialId++;
        return res;
    });
};
