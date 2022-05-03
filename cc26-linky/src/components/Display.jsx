import React from "react";
import "../Display.css";
import axios from "axios";
import DisplayGif from "./DisplayGif";

export default function Display({ content, setData, postColor, darkMode }) {
  let clickTitles = [
    "Click the link!",
    "Click the link!",
    "Click the link!",
    "Click the link!",
    "Click the link!",
    "Click the link!",
    "Click the link!",
    "Lick the link!",
    "Lick the link!",
    "Don't lick the link!!",
  ];

  async function requestTag(val) {
    let tag = val.toLowerCase().slice(1);
    const results = await axios.get(
      '/tags/' + tag
    );
    setData(results.data);
  }

console.log("content ********", content)

  async function deletePost(post){
    console.log("************", post.target.id)
     await axios.delete(`/del/${Number(post.target.id)}`)
  }

  function hashtags(val) {
    return `#${val} `;
  }

  function moreHashtags(val) {
    return (
      <a
        href=""
        onClick={(e) => {
          e.preventDefault();
          requestTag(val);
        }}
      >
        {val}
      </a>
    );
  }

  if (content !== null) {
    return (
      <div
        className={darkMode ? "display-container-dark" : "display-container"}
      >
        <p className={darkMode ? "displayMessage-dark" : "displayMessage"}>
          Find your favourites
        </p>
        {content.map((item, index) => {
          console.log("~ item", item);
          const itemUrl = item.link;
          console.log(item.id)
          return (
            <div
              className={darkMode ? "item-container-dark" : "item-container"}
              key={index}
              style={
                darkMode
                  ? {
                      background: postColor
                        ? postColor.target.style.background
                        : "black",
                    }
                  : {
                      background: postColor
                        ? postColor.target.style.background
                        : "white",
                    }
              }
            >
              <a href={itemUrl} target="_blank" rel="noreferrer">
                {clickTitles[Math.floor(Math.random() * 10)]}
              </a>
              <p className={darkMode ? "item-desc-dark" : "item-desc"}>
                Description: {item.description}
              </p>
              <p className={darkMode ? "item-desc-dark" : "item-desc"}>
                Tags:
                {item.tags
                  .map((val) => hashtags(val))
                  .map((val) => moreHashtags(val))}
              </p>
              <DisplayGif hashtags={hashtags} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div> Loading....</div>;
  }
}
