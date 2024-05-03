// TodoList.tsx
import React, { useState, useEffect } from "react";
import { firestore } from "../firebaseConfig";
import TodoItem from "./TodoItem";
import { Todo } from "./types";
import "./Todo.css";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const unsubscribe = firestore.collection("todos").onSnapshot((snapshot) => {
      const todosData: Todo[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.data().text || "",
        completed: doc.data().completed || false,
        when: doc.data().when || "", // Retrieve the 'when' field
      }));
      setTodos(todosData);
    });

    return () => unsubscribe(); // Unsubscribe from the listener when the component unmounts
  }, []);

  const handleDeleteTodo = async (id: string) => {
    try {
      await firestore.collection("todos").doc(id).delete();
      setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Error deleting todo: ", error);
    }
  };

  const handleToggleCompleted = async (id: string, completed: boolean) => {
    try {
      await firestore.collection("todos").doc(id).update({
        completed,
      });
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === id ? { ...todo, completed } : todo
        )
      );
    } catch (error) {
      console.error("Error updating todo: ", error);
    }
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem
            todo={todo}
            onToggleCompleted={handleToggleCompleted}
            onDelete={handleDeleteTodo}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
