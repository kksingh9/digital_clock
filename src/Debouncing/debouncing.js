import React, { useState, useEffect } from "react";
import useDebounce from "../hook/useDebounce";

//Debouncing is a technique used to delay a function call until a certain amount of time
// has passed sice the last time the function was invoked.
function SearchComponent() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500); // 500ms delay

  useEffect(() => {
    if (debouncedSearch) {
      // Call API or filter data
      console.log("Searching for:", debouncedSearch);
    }
  }, [debouncedSearch]);

  return (
    <>
    <div style={{
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        margin: "10px auto"

    }}>
        <span style={{
            padding:"20px",
            fontSize:"20px"
        }}>Debouncing</span>
    <input
      type="text"
      value={search}
      placeholder="Search..."
      style={{
        width:"80%"
      }}
      onChange={(e) => setSearch(e.target.value)}
    />
    </div>
    </>
  );
}

export default SearchComponent;