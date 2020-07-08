import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Todos } from "../services/state/todoState";
import { TodoAction, addTodo } from "../services/action";
import { IAddTodoButtonProps, TodoInput } from "../components/TodoInput";

const mapStateToProps = (state: Todos): {} => {
  return {};
};

const mapDispatchToProps = (
  dispatch: Dispatch<TodoAction>
): IAddTodoButtonProps => {
  return {
    onSubmit: (s: string) => {
      dispatch(addTodo(s));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoInput);
