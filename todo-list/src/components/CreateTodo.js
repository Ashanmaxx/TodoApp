import React from "react";
import classes from "../styles/CreateTodo.module.css";
import TodoInputForm from "./TodoInputForm";

// This shows create todo component
const CreateTodo = (props) => {
  return (
    <div className={classes.container}>
      <h1>Create Todo</h1>
      <TodoInputForm />
    </div>
  );
};

export default CreateTodo;
