import React from "react";
import { useState, useEffect } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

export default function DisplayGif() {
  const [gif, setGif] = useState([]);

  const gf = new GiphyFetch(process.env.REACT_APP_GIPHY_KEY);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await gf.random({ rating: "g" });
        const gifArray = response.data;
        setGif([...gif, gifArray]);
      } catch (error) {
        console.error(`random`, error);
      }
    };

    fetchData();
  }, []);

  const renderGifs = () => {
    return gif.map((el) => {
      return (
        <div key={el.id} className="gif-container">
          <img src={el.images.fixed_height.url} alt={el.title} />
        </div>
      );
    });
  };

  return <div>{renderGifs()} </div>;
}
