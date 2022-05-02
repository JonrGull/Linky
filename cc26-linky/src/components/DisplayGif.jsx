import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

// import { GiphyFetch } from "@giphy/js-fetch-api";

export default function DisplayGif() {
  const [gif, setGif] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "cN5p0tgnWScP40vsvlC56bgo38X4Pr95",
          limit: 10,
        },
      });
      setGif(results.data.data);
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

// cN5p0tgnWScP40vsvlC56bgo38X4Pr95
// process.env.REACT_APP_GIPHY_KEY
