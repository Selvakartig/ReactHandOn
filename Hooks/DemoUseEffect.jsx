import { useState, useEffect } from "react";

const DemoUseEffect = () => {
  const [count, setCount] = useState(0);

  console.log("Render");

  useEffect(() => {
    console.log("called useEffect without []");
  });

  useEffect(() => {
    console.log("called useEffect with []");
  }, []);

  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};

export default DemoUseEffect;
