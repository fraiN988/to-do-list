This is a simple Todo app built with Typescript, React.js and Firestore. Users can add new todos, mark them as done, and delete them.

Usage
To add a new to-do, type the task in the input field and optionally specify a deadline. Click the "Add To-do" button.
To mark a todo as done, click on checkbox.
To delete a todo, click on the (x) button.

File Structure
src/components/AddTodoForm.tsx: -adding new todos.
src/components/TodoItem.tsx: -displaying individual todo items.
src/components/TodoList.tsx: -displaying the list of todos.
src/components/types.ts: -interfaces for defining todo objects.
src/firebaseConfig.js: -firebase configuration and initialization.
src/App.css, src/AddTodoForm.css, src/Todo.css: -CSS files for styling.
src/App.tsx: -main component.
