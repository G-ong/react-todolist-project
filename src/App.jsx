import { useEffect, useState } from "react";
import "./App.css";
import NewTodolistForm from "./components/NewTodolistForm";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const localData = localStorage.getItem("TODOS");
    if (!localData) return [];
    return JSON.parse(localData);
  });

  function addTodo(title) {
    setTodos((current) => [
      ...current,
      { id: crypto.randomUUID(), title, completed: false },
    ]);
    // console.log(todos); setTodos是异步，所以打印出来的todos不是实时的，可以使用 useEffect 钩子来监听 todos 的变化；
  }
  useEffect(() => {
    localStorage.setItem("TODOS", JSON.stringify(todos));
  }, [todos]);

  function deleteTodo(id) {
    setTodos((current) => current.filter((item) => item.id !== id));
  }

  function toggleTodo(id, completed) {
    setTodos((current) =>
      current.map((item) => {
        if (item.id === id) return { ...item, completed };
        return item;
      })
    );
  }
  return (
    <>
      <h1>TodoList</h1>
      <NewTodolistForm addTodo={addTodo}></NewTodolistForm>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      ></TodoList>
    </>
  );
}

export default App;
