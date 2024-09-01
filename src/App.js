import { Logo } from "./components/Logo";
import { Form } from "./components/Form";
import { ItemsList } from "./components/ItemsList";
import { Statistics } from "./components/Statistics";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearItems() {
    setItems((items) => []);
  }
  return (
    <>
      <Logo></Logo>
      <Form onAddItem={handleAddItem}></Form>
      <ItemsList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearItems={clearItems}
      ></ItemsList>
      <Statistics items={items}></Statistics>
    </>
  );
}
export default App;
