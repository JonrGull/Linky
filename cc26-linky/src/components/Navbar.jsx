import React from "react";
import Search from "./Search";
import templogo from "../images/templogo.png";

export default function Navbar(props) {
  return (
    <div  className="nav">
        <div className="logo">
            <img src={templogo} alt="LINKY" />
      </div>
      <Search />
    </div>
  );
}
