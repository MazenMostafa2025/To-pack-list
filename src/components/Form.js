import { useState } from "react";
export function Form({ onAddItem }) {
  const [name, setName] = useState("");
  const [count, setCount] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!name) return;
    const newItem = {
      name,
      count,
      packed: false,
      id: crypto.randomUUID(),
    };
    onAddItem(newItem);

    setName("");
    setCount(1);
  }
  return (
    <>
      <form className="add-form" onSubmit={handleSubmit}>
        <span>What do you need for your trip ? </span>
        <select
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <button>ADD</button>
      </form>
    </>
  );
}
