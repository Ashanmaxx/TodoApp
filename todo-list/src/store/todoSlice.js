import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// get all todos api call
export const getTodosAsync = createAsyncThunk(
  "todos/getTodosAsync",
  async () => {
    const resp = await fetch("http://localhost:8080/toDoList/api/getAllTodos");
    if (resp.ok) {
      const todos = await resp.json();
      return { todos };
    }
  }
);

// add todo api cal
export const addTodoAsync = createAsyncThunk(
  "todos/addTodoAsync",
  async (payload) => {
    const resp = await fetch("http://localhost:8080/toDoList/api/addTodo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: payload.title,
        dueDate: payload.dueDate,
        description: payload.description,
        status: payload.status,
      }),
    });
    if (resp.ok) {
      const todo = await resp.json();
      return { todo };
    }
  }
);

// delete todo api call
export const deleteTodoAsync = createAsyncThunk(
  "todos/deleteTodoAsync",
  async (payload) => {
    console.log("Delete id ++" + payload.id);
    const resp = await fetch(
      `http://localhost:8080/toDoList/api/delete/${payload.id}`,
      {
        method: "DELETE",
      }
    );

    if (resp.ok) {
      console.log("payload.id :" + payload.id);
      return { id: payload.id };
    }
  }
);

// update todo api call
export const updateTodoAsync = createAsyncThunk(
  "todos/completeTodoAsync",
  async (payload) => {
    console.log("aaaaa :" + payload);
    console.log("bbbbb :" + payload.todoObj);
    const resp = await fetch("http://localhost:8080/toDoList/api/modifyTodo", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: payload.id,
        status: payload.status,
        dueDate: payload.dueDate,
        title: payload.title,
        description: payload.description,
      }),
    });

    if (resp.ok) {
      const todo = await resp.json();
      return { todo };
    }
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getTodosAsync.fulfilled]: (state, action) => {
      return action.payload.todos;
    },
    [addTodoAsync.fulfilled]: (state, action) => {
      state.push(action.payload.todo);
    },
    [deleteTodoAsync.fulfilled]: (state, action) => {
      return state.filter((todo) => todo !== action.payload.id);
    },
    [updateTodoAsync.fulfilled]: (state, action) => {},
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
