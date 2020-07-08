import { IAddTodoAction } from "../interfaces/AddTodoAction";
import { IToggleTodoAction } from "../interfaces/ToggleTodoAction";

let nextTodoId = 0;

export enum TodoActionType {
  ADD_TODO = "ADD_TODO",
  TOGGLE_TODO = "TOGGLE_TODO",
}

export const addTodo = (text: string): IAddTodoAction => {
  return {
    id: nextTodoId++,
    text,
    type: TodoActionType.ADD_TODO,
  };
};

export const toggleTodo = (id: number): IToggleTodoAction => {
  return {
    id,
    type: TodoActionType.TOGGLE_TODO,
  };
};
