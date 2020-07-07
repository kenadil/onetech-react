import { createStore } from "redux";
import { counter } from "../Counter/Counter";


export const store = createStore(counter);