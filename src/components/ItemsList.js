import { useState } from "react";
import { Item } from "./Item";
export function ItemsList({ items, onDeleteItem, onToggleItem, onClearItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "name") {
    sortedItems = items.slice().sort((a, b) => a.name.localeCompare(b.name));
  }
  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <>
      <div className="list">
        <ul>
          {sortedItems.map((item) => {
            return (
              <Item
                item={item}
                onDeleteItem={onDeleteItem}
                onToggleItem={onToggleItem}
                key={item.id}
              />
            );
          })}
        </ul>

        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="packed">SORT BY PACKED STATUS</option>
            <option value="name">SORT BY NAME</option>
            <option value="input">SORT BY INPUT ORDER</option>
          </select>
          <button onClick={onClearItems}>CLEAR LIST</button>
        </div>
      </div>
    </>
  );
}
