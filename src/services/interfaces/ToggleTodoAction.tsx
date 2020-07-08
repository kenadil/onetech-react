import { TodoActionType } from "../action";

export interface IToggleTodoAction {
  id: number;
  type: TodoActionType.TOGGLE_TODO;
}
