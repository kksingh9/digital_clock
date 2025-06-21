import { useEffect, useState } from "react";

function useThrottle(value, delay) {
  const [throttled, setThrottled] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setThrottled(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return throttled;
}

export default useThrottle;