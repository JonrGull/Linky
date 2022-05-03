import React from "react";
import Navbar from "./Navbar";
import Display from "./Display";
import Input from "./Input";
import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [postColor, setPostColor] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [update, setUpdate] = useState(0)

  const fetchData = async () => {
    const response = await axios.get("/api");
    const info = response.data;
    setData(info);
  };

  const postData = async (data) => {
    await axios.post("/newpost", data);
    fetchData();
  };

  const colorChoice = (color) => {
    setPostColor(color);
  };

  console.log("~ data", data);


  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchData();
  }, [update]);

  return (
    <div className={darkMode ? "App-dark" : "App"}>
      <Navbar
        setData={setData}
        fetchData={fetchData}
        setDarkMode={setDarkMode}
        darkMode={darkMode}
      />
      <Input
        postData={postData}
        colorChoice={colorChoice}
        darkMode={darkMode}
        setUpdate={setUpdate}
        update={update}
      />
      <Display
        content={data}
        postColor={postColor}
        setData={setData}
        darkMode={darkMode}
        setUpdate={setUpdate}
        update={update}
      />
    </div>
  );
}
