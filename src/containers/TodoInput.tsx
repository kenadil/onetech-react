import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Todos } from "../services/state/todoState";
import { TodoInput } from "../components/TodoInput";
import { ITodoInputProps } from "../services/interfaces/TodoInputProps";
import { TodoAction } from "../services/types/TodoAction";
import { addTodo } from "../services/action";

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
