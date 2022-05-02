import React from "react";
import Navbar from "./Navbar";
import Display from "./Display";
import Input from "./Input";
import axios from "axios";
import "../App.css";
import { useEffect, useState } from "react";

import { GiphyFetch } from "@giphy/js-fetch-api";
import { IGif } from "@giphy/js-types";

export default function App() {
  const [data, setData] = useState(null);
  // const [gif, setGif] = useState(null);

  const fetchData = async () => {
    const response = await axios.get("https://cc26-linky.herokuapp.com/api");
    const info = response.data;
    setData(info);
  };

  const postData = async (data) => {
    await axios.post("https://cc26-linky.herokuapp.com/newpost", data);
    fetchData();
  };

  const giphyFetch = new GiphyFetch("sXpGFDGZs0Dv1mmNFvYaGUvYwKX0PWIh");

  function GifDemo() {
    const [gif, setGif] = useState(null);
    async () => {
      const { data } = await giphyFetch.gif("fpXxIjftmkk9y");
      setGif(data);
    };
    return gif && <Gif gif={gif} width={200} />;
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar setData={setData} fetchData={fetchData} />
      <Input postData={postData} />
      <Display content={data} />
    </div>
  );
}
