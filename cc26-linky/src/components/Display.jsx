import React from "react";
import "../Display.css";

export default function Display({ content }) {
  if (content !== null) {
    return (
      <div className="display-container">
        <p className="displayMessage">Find your favourites</p>
        {content.map((item, index) => {
          const itemUrl = item.link;
          return (
            <div className="item-container" key={index}>
              <a href={itemUrl}>Don't lick the link!</a>
              <p className="item-desc">{item.description}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div> Loading....</div>;
  }
}
