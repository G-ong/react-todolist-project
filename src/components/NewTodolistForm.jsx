import { useState } from "react";

export default function NewTodolistForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");
  function handleSubmit(e) {
    e.preventDefault(); // 一定要阻止form提交的默认行为，不然会刷新页面
    if (newItem === "") return;
    addTodo(newItem);
    setNewItem("");
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="newItem">add new item</label>
        <br />
        <input
          type="text"
          id="newItem"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        ></input>
        <button type="submit">add</button>
      </form>
    </>
  );
}
