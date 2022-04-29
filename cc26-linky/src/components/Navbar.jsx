import React from "react";
import Search from "./Search";
import templogo from "../images/templogo.png";

export default function Navbar({setKeyword, keyword}) {
  return (
    <div  className="nav">
        <div className="logo">
            <img src={templogo} alt="LINKY" />
      </div>
      <Search setKeyword={setKeyword} keyword={keyword}/>
    </div>
  );
}
