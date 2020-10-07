import React from "react";
import TodoList from "./todo/TodoList";

function App() {
  const todos = [
    { id: 1, completed: false, title: "Купить что-то 1" },
    { id: 2, completed: false, title: "Купить что-то 2" },
    { id: 3, completed: false, title: "Купить что-то 3" },
  ];
  return (
    <div className="wrapper">
      <h1>React tutor!</h1>

      <TodoList todos={todos} />
    </div>
  );
}

export default App;
