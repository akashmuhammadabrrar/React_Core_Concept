import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  const handleReduce = () => {
    const newCount = count - 1;

    setCount(newCount);
  };

  return (
    <div style={{ border: "2px solid rebeccapurple" }}>
      <h3>Counter:{count}</h3>
      <button onClick={handleAdd}>Add To Increase</button>

      <button onClick={handleReduce}>Add To Reduce</button>
    </div>
  );
}
