import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Todos } from "../services/state/todoState";
import { TodoAction, addTodo } from "../services/action";
import { TodoInput } from "../components/TodoInput";
import { ITodoInputProps } from "../services/interfaces/TodoInputProps";

const mapStateToProps = (state: Todos): {} => {
  return {};
};

const mapDispatchToProps = (
  dispatch: Dispatch<TodoAction>
): ITodoInputProps => {
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
