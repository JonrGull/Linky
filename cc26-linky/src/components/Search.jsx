import React from "react";


export default function Search(props) {
  return (
    <div className="search">
      <label>Tag Search</label>
        <input type="text" placeholder="Put your interests!" />
        <button className="searchB" >Go!</button>
    </div>
  );
}

//onInput = {onInput}