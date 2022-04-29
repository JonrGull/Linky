import "../App.css";
import React from "react";
import Navbar from "./Navbar";
import Display from "./Display";
import Input from "./Input";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [data, setData] = useState(null);
  const [keyword, setKeyword] = useState("");

  const fetchdata = async () => {
    const response = await axios.get("http://localhost:9000/api");
    const info = response.data;
    setData(info);
  };

  const postData = async (data) => {
    await axios.post("http://localhost:9000/newpost", data);
    fetchdata();
  };
  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="App">
      <Navbar setKeyword={setKeyword} keyword={keyword} />
      <Input postData={postData} />
      <Display content={data} />
    </div>
  );
}
