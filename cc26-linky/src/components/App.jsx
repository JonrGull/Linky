import "../App.css";
import React from "react";
import Navbar from "./Navbar";
import Display from "./Display"
import Input from "./Input";
import axios from 'axios';
import { useEffect, useState} from "react";


export default function App() {
  const [data, setData] = useState(null); // array

  const fetchdata = async () => {
  const response = await axios.get("http://localhost:9000/api");  
  const info = response.data;
  console.log(typeof info.link)
  setData(info);
 }
  
 useEffect(() => {
  fetchdata();
 }
 , []);
 
 console.log("data",data);
 console.table(data)
 

  return (
      <div className="App">
        <Navbar />
          <Input className="input-container" />
            <Display content={data}/>
      </div>
      
                      
  );
}


//App -- Navbar, Input, Display
//Navbar--Logo, SearchBar
//Input-- InputBox, Button
//Display-- Link and discriptions
        