//useCallback(fn, deps) memoizes a function, so the same instance is reused unless dependencies change.

//React re-renders may cause new function instances to be created, which can cause:

//Unwanted re-renders in child components (especially memoized ones)

//Performance issues in large components or trees

import React, { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Child</button>;
}

const MemoizedChild = React.memo(Child); // ✅ Will only re-render if props change

function Parent() {
  const [count, setCount] = useState(0);

  // 👇 Without useCallback, this would be a new function every render
  const handleClick = useCallback(() => {
    console.log("Child clicked");
    setCount((prev) => (count+1));
  }, [count]); // ✅ Only re-created if dependencies change

  return (
    <div>
      <p>Parent count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment Parent</button>
      <MemoizedChild onClick={handleClick} />
    </div>
  );
}

export default Parent;