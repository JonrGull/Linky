import React from "react";
import Search from "./Search";
import HomeBtn from "./HomeBtn";
import linkylogoonobg from "../images/linkyLogoonobg.png";
import "../Navbar.css";

export default function Navbar({ setData, fetchData }) {
  return (
    <div className="nav">
      <div className="logo">
        <img src={linkylogoonobg} alt="LINKY" />
      </div>
      <HomeBtn fetchData={fetchData} />
      <Search setData={setData} />
    </div>
  );
}
