import TodoItem from "./TodoItem";
export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <>
      {todos.length === 0 && <div>No Todos</div>}
      <ul>
        {todos.map((item) => (
          <TodoItem
            key={item.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            title={item.title}
            {...item}
          />
        ))}
      </ul>
    </>
  );
}
