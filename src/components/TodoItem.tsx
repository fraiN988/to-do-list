// TodoItem.tsx
import React from "react";
import { Todo } from "./types";

interface TodoItemProps {
  todo: Todo;
  onToggleCompleted: (id: string, completed: boolean) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleCompleted,
  onDelete,
}) => {
  const handleToggle = async () => {
    try {
      await onToggleCompleted(todo.id, !todo.completed);
    } catch (error) {
      console.error("Error toggling todo completion: ", error);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <span className="todo-text">{todo.text}</span>
      <span className="todo-when">{todo.when}</span>{" "}
      {/* Display the 'when' field */}
      <button className="delete-button" onClick={() => onDelete(todo.id)}>
        ✕ {/* This is the "x" character */}
      </button>
    </div>
  );
};

export default TodoItem;
