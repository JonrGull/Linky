import React from "react";
import Search from "./Search";
import linkylogoonobg from "../images/linkyLogoonobg.png";
import { homeBtn } from "homeBtn";
import "../Navbar.css";

export default function Navbar({ setData }) {
  return (
    <div className="nav">
      <div className="logo">
        <img src={linkylogoonobg} alt="LINKY" />
      </div>
      <div className="home-button">
        <homeBtn />
      </div>

      <Search setData={setData} />
    </div>
  );
}
