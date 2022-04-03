import React, { useState } from "react";
import classes from "../styles/TodoItem.module.css";
import { deleteTodoAsync } from "../store/todoSlice";
import { useDispatch } from "react-redux";
import { Modal } from "react-bootstrap";
import { updateTodoAsync } from "../store/todoSlice";

// This is the component shows the todo item
const TodoItem = (props) => {
  const [isShown, setIsShown] = useState(false);

  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    const id = props.id;
    dispatch(deleteTodoAsync({ id }));

    window.location.reload();
  };

  const handleCheckboxClick = () => {
    dispatch(
      updateTodoAsync({
        id: props.id,
        status: !props.status,
        dueDate: props.dueDate,
        title: props.title,
        description: props.description,
      })
    );
    window.location.reload();
  };

  return (
    <div className={classes.wrapper}>
      <li
        className={`list-group-item ${
          props.isDelete ? "list-group-item-success" : "list-group-item-primary"
        }`}
      >
        <div
          className={classes.item}
          onMouseEnter={() => setIsShown(true)}
          onMouseLeave={() => setIsShown(false)}
        >
          <span className="d-flex align-items-center">
            {!props.isDelete ? (
              <input
                type="checkbox"
                className="mr-3"
                onClick={handleCheckboxClick}
              ></input>
            ) : (
              <p></p>
            )}
            {props.isDelete ? (
              <label className={classes.textDecoration}>{props.title}</label>
            ) : (
              <label>{props.title}</label>
            )}
          </span>
          {props.isDelete ? (
            <button className={classes.deleteBtn} onClick={handleDeleteClick}>
              Delete
            </button>
          ) : (
            <button
              className={classes.viewBtn}
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Update
            </button>
          )}
        </div>
        {isShown && (
          <>
            <Modal.Dialog>
              <Modal.Body>
                <div className="container">
                  <div className="row">
                    <div className=" col">
                      <label>Title </label>
                    </div>
                    <div className="col">
                      <label>{props.title}</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-sm">
                      <label>Description </label>
                    </div>
                    <div className="col-sm">
                      <label>{props.description}</label>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col">
                      <label>Due Date </label>
                    </div>
                    <div className="col">
                      <label>{props.dueDate}</label>
                    </div>
                  </div>
                </div>
              </Modal.Body>
            </Modal.Dialog>
          </>
        )}
      </li>
    </div>
  );
};

export default TodoItem;
