import React from "react";
import Search from "./Search";
import linkylogoonobg from "../images/linkyLogoonobg.png";
<<<<<<< HEAD

export default function Navbar({ setData }) {
=======
import "../Navbar.css";
export default function Navbar({ setKeyword, keyword }) {
>>>>>>> 660cc9b (chore: organize CSS files and fix CSS bug.)
  return (
    <div className="nav">
      <div className="logo">
        <img src={linkylogoonobg} alt="LINKY" />
      </div>
<<<<<<< HEAD
      <Search setData={setData} />
=======
      <Search setKeyword={setKeyword} keyword={keyword} />
>>>>>>> 660cc9b (chore: organize CSS files and fix CSS bug.)
    </div>
  );
}
