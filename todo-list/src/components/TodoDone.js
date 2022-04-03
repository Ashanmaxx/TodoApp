import React, { useEffect } from "react";
import classes from "../styles/TodoDone.module.css";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { getTodosAsync } from "../store/todoSlice";

//This component shows the done todo component
const TodoDone = (props) => {
  const dispatch = useDispatch();
  const doneToDoList = useSelector((state) => state.todos);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      <h1>{props.name}</h1>
      <ul className="list-group">
        {doneToDoList.map((todo, index) =>
          todo.status === true ? (
            <TodoItem
              key={index}
              title={todo.title}
              status={todo.status}
              id={todo.id}
              dueDate={todo.dueDate}
              description={todo.description}
              isDelete={true}
            />
          ) : null
        )}
      </ul>
    </div>
  );
};

export default TodoDone;
