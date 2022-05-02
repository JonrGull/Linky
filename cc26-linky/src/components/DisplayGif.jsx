import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import { GiphyFetch } from "@giphy/js-fetch-api";

export default function DisplayGif() {
  //can i use get the tags value from Display?

  const [gif, setGif] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const results = await axios("https://api.giphy.com/v1/gifs/trending", {
        params: {
          api_key: "cN5p0tgnWScP40vsvlC56bgo38X4Pr95",
          limit: 2,
        },
      });
      console.log(results);
      setGif(results);
    };

    fetchData();
  }, []);

  return <div>DisplayGif!!!!!! </div>;
}

// cN5p0tgnWScP40vsvlC56bgo38X4Pr95
// process.env.REACT_APP_GIPHY_KEY
