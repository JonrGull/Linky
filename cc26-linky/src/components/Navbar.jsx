import React from "react";
import Search from "./Search";
import HomeBtn from "./HomeBtn";
import DarkMode from "./DarkMode";
import linkylogoonobg from "../images/linkyLogoonobg.png";
import "../Navbar.css";

export default function Navbar({ setData, fetchData, setDarkMode, darkMode }) {
  return (
    <div className={ darkMode ? "nav-dark" : "nav"}>
      <div className="logo">
        <img src={linkylogoonobg} alt="LINKY" />
      </div>
      <DarkMode setDarkMode={setDarkMode} darkMode={darkMode} />
      <HomeBtn fetchData={fetchData} darkMode={darkMode} />
      <Search setData={setData} darkMode={darkMode} />
    </div>
  );
}
