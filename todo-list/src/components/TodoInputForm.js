import React, { useState } from "react";
import { addTodoAsync } from "../store/todoSlice";
import { useDispatch } from "react-redux";

// This is the component shows the todo import form
const TodoInputForm = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();

    dispatch(
      addTodoAsync({
        title: title,
        description: description,
        dueDate: dueDate,
        status: false, // Not completed todo item status is false
      })
    );

    setTitle("");
    setDescription("");
    setDueDate("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            id="inputTitle"
            placeholder="Enter title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            type="text"
            className="form-control"
            id="inputDescription"
            placeholder="Enter Description"
            rows={4}
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Due Date</label>
          <input
            id="dueDate"
            className="form-control"
            type="date"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TodoInputForm;
