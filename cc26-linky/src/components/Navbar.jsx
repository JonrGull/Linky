import React from "react";
import Search from "./Search";
import linkylogoonobg from "../images/linkyLogoonobg.png";

export default function Navbar({ setData }) {
  return (
    <div className="nav">
      <div className="logo">
        <img src={linkylogoonobg} alt="LINKY" />
      </div>
      <Search setData={setData} />
    </div>
  );
}
