import React from "react";
import { Provider } from "react-redux";
import { store } from "../services/reducer/store";
import TodoInput from "../containers/TodoInput";
import TodoList from "../containers/TodoList";
import "./TodoPage.css";

const TodoPage = () => {
  return (
    <div className="TodoPage">
      <Provider store={store}>
        <TodoInput />
        <TodoList />
      </Provider>
    </div>
  );
};

export default TodoPage;
