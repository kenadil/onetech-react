import React from "react";
import { Provider } from "react-redux";
import { store } from "../services/reducer/store";
import TodoInput from "../containers/TodoInput";
import TodoList from "../containers/TodoList";

const TodoPage = () => {
  return (
    <Provider store={store}>
      <TodoInput/>
      <TodoList />
    </Provider>
  )
}

export default TodoPage;