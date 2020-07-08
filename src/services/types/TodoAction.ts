import { IAddTodoAction } from "../interfaces/AddTodoAction";
import { IToggleTodoAction } from "../interfaces/ToggleTodoAction";

export type TodoAction = IAddTodoAction | IToggleTodoAction;