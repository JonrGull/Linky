import "../App.css";
import React from "react";
import Navbar from "./Navbar";
import Display from "./Display"
import Input from "./Input";
import axios from 'axios';
import { useEffect, useState} from "react";


export default function App() {
  const [data, setData] = useState(null); 
  const [upload, setUpload] = useState("");//post data

////fetch data
  const fetchdata = async () => {
    const response = await axios.get("http://localhost:9000/api");  
    const info = response.data;
    // console.log(typeof info.link);
    setData(info);
 };
  
 useEffect(() => {
  fetchdata();
  // console.log('DATA: ', data)
 }
 , []);


///post data


//  useEffect(() => {
//   //post function
//   
//   },[upload]);

///tag filter


  return (
      <div className="App">
        <Navbar />
        <Input className="input-container" setUpload={setUpload} upload = {upload} />
        <Display content={data}/>
        
      </div>                            
  );
}


//App -- Navbar, Input, Display
//Navbar--Logo, SearchBar
//Input-- InputBox, Button
//Display-- Link and discriptions
        