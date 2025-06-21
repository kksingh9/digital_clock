import React, { useState, useMemo } from "react";

function ExpensiveComponent() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  // 👇 expensive calculation (simulate with a loop)
  const expensiveResult = useMemo(() => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
      total += i;
    }
    return total + count;
  }, [count]); // 🔁 Only re-calculate when `count` changes

  return (
    <div>
      <h1>Memoized Expensive Calculation</h1>
      <p>Count: {count}</p>
      <p>Expensive Result: {expensiveResult}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <input
        placeholder="Type something..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}

export default ExpensiveComponent;