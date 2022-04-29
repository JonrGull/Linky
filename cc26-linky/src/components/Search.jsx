import React, { useRef } from "react";

export default function Search({ setKeyword, keyword }) {
  const searchRef = useRef(null);

  function updateKey() {
    let key = searchRef.current.value;
    if (key) {
      setKeyword(searchRef.current.value);
    } 
  }

  return (
    <div className="search">
      <label>Tag Search</label>
        <input type="text" className ="searchGo"ref={searchRef} placeholder="Put your interests!" />
        <button className="searchB" onClick={() => updateKey()} >Go!</button>
    </div>
  );
}
