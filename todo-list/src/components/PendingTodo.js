import React, { useEffect } from "react";
import classes from "../styles/PendingTodo.module.css";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync } from "../store/todoSlice";

//This is the component shows the pending todo list
const PendingTodo = (props) => {
  const dispatch = useDispatch();
  const pendingList = useSelector((state) => state.todos);
  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);
  return (
    <div className={classes.container}>
      <h1>{props.name}</h1>
      <ul className="list-group">
        {pendingList.map((todo, index) =>
          todo.status === false ? (
            <TodoItem
              key={index}
              title={todo.title}
              status={todo.status}
              id={todo.id}
              dueDate={todo.dueDate}
              description={todo.description}
              isDelete={false}
            />
          ) : null
        )}
      </ul>
    </div>
  );
};

export default PendingTodo;
