import axios from "axios";
import React, { useRef } from "react";

export default function Search({ setData, darkMode }) {
  const searchRef = useRef(null);

  const requestTag = async () => {
    let tag = searchRef.current.value.toLowerCase();
    console.log("tag:", tag);
    const results = await axios.get(
      `/tags/${tag}`
    );
    setData(results.data);
  };

  return (
    <div className={darkMode ? "search-dark": "search"}>
      <label>Tag Search</label>
      <input
        type="text"
        className="searchGo"
        ref={searchRef}
        placeholder="Put your interests!"
      />
      <button className="searchB" onClick={requestTag}>
        Go!
      </button>
    </div>
  );
}
