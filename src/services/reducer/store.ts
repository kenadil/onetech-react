import { createStore, Store } from "redux";
import { todos } from "./todos";
import { Todos } from "../state/todoState";

export const store:Store<Todos> = createStore(todos, []);