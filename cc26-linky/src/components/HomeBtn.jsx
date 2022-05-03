import React from "react";
import "../HomeBtn.css";

export default function HomeBtn({ fetchData }) {
  const handleClick = () => fetchData();

  return (
    <div className="home-container">
      <button className="home-btn" onClick={handleClick}>
        Home
      </button>
    </div>
  );
}
