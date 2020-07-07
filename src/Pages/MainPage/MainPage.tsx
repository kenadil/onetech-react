import React from "react";
import "./MainPage.css";
import { connect } from "react-redux";
import { INCREMENT, DECREMENT } from "../../Services/Actions/counterActions";
import { store } from "../../Services/Reducers/Store/store";

const MainPage = (props: any) => {
  console.log(props.count);
  return (
    <div className="MainPage">
      <h1>Counter</h1>
      <div className="row-container">
        <button onClick={() => store.dispatch({ type: "DECREMENT" })}>-</button>
        <div> {props.count} </div>
        <button onClick={() => store.dispatch({ type: "INCREMENT" })}>+</button>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    count: state,
  };
};

export default connect(mapStateToProps, { INCREMENT, DECREMENT })(MainPage);
