// AddTodoForm.tsx
import React, { useState } from "react";
import { firestore } from "../firebaseConfig";
import "./AddTodoForm.css";

const AddTodoForm: React.FC = () => {
  const [todoText, setTodoText] = useState<string>("");
  const [todoWhen, setTodoWhen] = useState<string>(""); // New state for the 'when' field

  const handleAddTodo = async () => {
    try {
      await firestore.collection("todos").add({
        text: todoText,
        completed: false,
        when: todoWhen, // Include the 'when' field
      });
      setTodoText("");
      setTodoWhen(""); // Reset the 'when' field
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
        className="todo-input" // You can use the same styling or create a new one for this input
      />
      <button onClick={handleAddTodo} className="add-button">
        Add To-do
      </button>
    </div>
  );
};

export default AddTodoForm;
