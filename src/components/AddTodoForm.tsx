import React, { useState } from "react";
import { firestore } from "../firebaseConfig";
import "./AddTodoForm.css";

const AddTodoForm: React.FC = () => {
  const [todoText, setTodoText] = useState<string>("");
  const [todoWhen, setTodoWhen] = useState<string>("");

  const handleAddTodo = async () => {
    try {
      await firestore.collection("todos").add({
        text: todoText,
        completed: false,
        when: todoWhen,
      });
      setTodoText("");
      setTodoWhen("");
      console.log("To-do added successfully.");
    } catch (error) {
      console.error("Error adding to-do: ", error);
    }
  };

  return (
    <div className="add-todo-form">
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Add a new to-do..."
        className="todo-input"
      />
      <input
        type="text"
        value={todoWhen}
        onChange={(e) => setTodoWhen(e.target.value)}
        placeholder="When..."
        className="todo-input"
      />
      <button onClick={handleAddTodo} className="add-button">
        Add To-do
      </button>
    </div>
  );
};

export default AddTodoForm;
