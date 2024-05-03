import React from "react";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import "./App.css";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <div className="todo-box">
        <h1>To-do List</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    </div>
  );
};

export default App;
