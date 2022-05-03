import React from "react";
import "../HomeBtn.css";

export default function HomeBtn({ fetchData, darkMode }) {
  const handleClick = () => fetchData();

  return (
    <div className="home-container">
      <button className={darkMode ? "home-btn-dark" : "home-btn"} onClick={handleClick}>
        Home
      </button>
    </div>
  );
}
