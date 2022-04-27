import React from "react";
import Search from "./Search";

export default function Navbar(props) {
  return (
    <div  className="nav">
        <div className="logo">
            <img src="#" alt="LINKY" />
      </div>
      <Search />
    </div>
  );
}
