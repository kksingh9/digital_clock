import { throttle } from "lodash";
import { useEffect } from "react";

function ThrottledScroll() {
  useEffect(() => {
    const throttledScroll = throttle(() => {
      console.log("Throttled scroll event");
    }, 200); // Every 200ms

    window.addEventListener("scroll", throttledScroll);
    return () => window.removeEventListener("scroll", throttledScroll);
  }, []);

  return <div style={{ height: "2000px" }}>Scroll me!</div>;
}
export default ThrottledScroll;