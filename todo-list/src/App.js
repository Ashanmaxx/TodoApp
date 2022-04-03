import "./App.css";
import TodoDone from "./components/TodoDone";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components/CreateTodo";
import PendingTodo from "./components/PendingTodo";

function App() {
  return (
    <div className="App">
      <CreateTodo name="Create ToDo" />
      <PendingTodo name="Pendings" />
      <TodoDone name="Done" />
    </div>
  );
}

export default App;
