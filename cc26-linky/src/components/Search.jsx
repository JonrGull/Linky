import axios from "axios";
import React, { useRef } from "react";

export default function Search({ setData }) {
  const searchRef = useRef(null);

  const requestTag = async () => {
    let tag = searchRef.current.value.toLowerCase();
    console.log("tag:", tag);
    const results = await axios.get(
      `https://cc26-linky.herokuapp.com/tags/${tag}`
    );
    setData(results.data);
  };

  return (
    <div className="search">
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
