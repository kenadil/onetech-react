import { Todos } from "../services/state/todoState";
import { Dispatch } from "react";
import { TodoAction, toggleTodo } from "../services/action";
import { connect } from "react-redux";
import TodoList from "../components/TodoList";

interface IStateFromProps {
  todos: Todos;
}

interface IDispatchFromProps {
    onTodoClick: (id: number) => void;
}

const mapStateToProps = (state: Todos): IStateFromProps => {
    return {
        todos: state,
    };
};

const mapDispatchToProps = (dispatch: Dispatch<TodoAction>): IDispatchFromProps => {
    return {
        onTodoClick: (id: number) => {
            dispatch(toggleTodo(id));
        },
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoList);
  