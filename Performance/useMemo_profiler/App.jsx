import { useState } from "react";
import List from "./List";

export default function App() {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([
    { id: 1, name: "Apple" },
    { id: 2, name: "Orange" },
    { id: 3, name: "Mango" },
    { id: 4, name: "Banana" },
  ]);
  const hasPineApple = items.some((item) => item.name === "PineApple");

  console.log("Rendering App");

  return (
    <div>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button
        onClick={() => {
          setItems([...items, { id: 5, name: "PineApple" }]);
        }}
        disabled={hasPineApple}
      >
        Add PineApple
      </button>

      <List items={items} />
    </div>
  );
}
