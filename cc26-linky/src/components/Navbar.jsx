import React from "react";
import Search from "./Search";
import linkylogoonobg from "../images/linkyLogoonobg.png";

export default function Navbar({setKeyword, keyword}) {
  return (
    <div  className="nav">
        <div className="logo">
            <img src={linkylogoonobg} alt="LINKY" />
      </div>
      <Search setKeyword={setKeyword} keyword={keyword}/>
    </div>
  );
}
