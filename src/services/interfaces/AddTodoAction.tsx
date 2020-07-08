import { TodoActionType } from "../action";

export interface IAddTodoAction {
  id: number;
  text: string;
  type: TodoActionType.ADD_TODO;
}
