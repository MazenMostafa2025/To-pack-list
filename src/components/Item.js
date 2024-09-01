export function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        ></input>
        <span style={{ textDecoration: item.packed ? "line-through" : "none" }}>
          {item.count} {item.name}
        </span>
        <button onClick={() => onDeleteItem(item.id)}>&times;</button>
      </li>
    </>
  );
}
