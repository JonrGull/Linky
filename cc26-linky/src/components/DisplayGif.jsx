import React from "react";
import { useState, useEffect } from "react";
import { GiphyFetch } from "@giphy/js-fetch-api";

export default function DisplayGif() {
  const [gif, setGif] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const results = await axios("https://api.giphy.com/v1/gifs/trending", {
  //         params: {
  //           api_key: "cN5p0tgnWScP40vsvlC56bgo38X4Pr95",
  //           limit: 10,
  //         },
  //       });
  //       console.log(results);
  //       setGif(results.data.data);
  //     };

  //     fetchData();
  //   }, []);

  const gf = new GiphyFetch("cN5p0tgnWScP40vsvlC56bgo38X4Pr95");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await gf.random({ rating: "g" });
        const gifArray = response.data;
        setGif([...gif, gifArray]);
        console.log(`random`, response);
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

// cN5p0tgnWScP40vsvlC56bgo38X4Pr95
// process.env.REACT_APP_GIPHY_KEY
