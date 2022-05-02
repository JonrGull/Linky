import React from "react";
import Navbar from "./Navbar";
import Display from "./Display";
import Input from "./Input";
import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [userData, setUserData] = useState([]);
  const [postColor, setPostColor] = useState(null)

  const fetchdata = async () => {
    const response = await axios.get("https://cc26-linky.herokuapp.com/api");
    const info = response.data;
    setData(info);
  };

  const fetchUser = async () => {
    const response = await axios.get("/user");
    const userInfo = response.data;
    setUserData(userInfo);
  }

  const postData = async (data) => {
    await axios.post("https://cc26-linky.herokuapp.com/newpost", data);
    fetchdata();
  };

  const colorChoice = (color) => {
    setPostColor(color)
  }


  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="App">
      <Navbar setData={setData} fetchData={fetchdata}/>
      <Input postData={postData} colorChoice={colorChoice} />
      <Display content={data} postColor={postColor} setData={setData} />

    </div>
  );
}
