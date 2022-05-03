import React from "react";
import DisplayGif from "./DisplayGif";
import "../Display.css";
export default function Display({ content }) {
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

  function hashtags(val) {
    return `#${val} `;
  }

  if (content !== null) {
    return (
      <div className="display-container">
        <p className="displayMessage">Find your favourites</p>
        {content.map((item, index) => {
          const itemUrl = item.link;
          return (
            <div className="item-container" key={index}>
              <a href={itemUrl} target="_blank" rel="noreferrer">
                {clickTitles[Math.floor(Math.random() * 10)]}
              </a>
              <p className="item-desc">{item.description}</p>
              <p className="item-desc">
                Tags: {item.tags.map((val) => hashtags(val))}
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
