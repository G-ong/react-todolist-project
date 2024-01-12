export default function TodoItem({
  id,
  title,
  toggleTodo,
  completed,
  deleteTodo,
}) {
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />{title}
      </label>
      <button onClick={() => deleteTodo(id)}>delete</button>
    </li>
  );
}
