import "../App.css";
import React from "react";
import Navbar from "./Navbar";
import Display from "./Display"
import Input from "./Input";
import axios from 'axios';
import { useEffect, useState} from "react";
// const [data, setData] = useState([]);

// const fetchdata = async () => {
//    await fetch("http://localhost:5000/api")
//    .then(res => res.json)
//    .then(data => setData(data))
// };

// useEffect(() => fetchdata(), []);

export default function App() {
  return (
      <div className="App">
        {/* <h1>I think peanut butter is underrated!</h1> 
        <h2>With jelly. Jelly is good.</h2>  */}
        <Navbar />
          <Input className="input-container" />
            <Display />
      </div>
      
                      
  );
}


//App -- Navbar, Input, Display
//Navbar--Logo, SearchBar
//Input-- InputBox, Button
//Display-- Link and discriptions
        