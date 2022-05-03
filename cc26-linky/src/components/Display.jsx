import React from 'react';
import '../Display.css';
import axios from 'axios';
export default function Display({ content, setData, postColor }) {
  
  let clickTitles = [
    'Click the link!',
    'Click the link!',
    'Click the link!',
    'Click the link!',
    'Click the link!',
    'Click the link!',
    'Click the link!',
    'Lick the link!',
    'Lick the link!',
    "Don't lick the link!!",
  ];

  async function requestTag(val) {
    let tag = val.toLowerCase().slice(1);
    const results = await axios.get(
      '/tags/' + tag
    );
    setData(results.data);
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
      <div className="display-container" >
        <p className="displayMessage">Find your favourites</p>
        {content.map((item, index) => {
          const itemUrl = item.link;
          return (
            <div className="item-container" key={index} style={{background: postColor ? postColor.target.style.background : 'white'}}>
              <a href={itemUrl} target="_blank">
                {clickTitles[Math.floor(Math.random() * 10)]}
              </a>
              <p className="item-desc">Description: {item.description}</p>
              <p className="item-desc">
                Tags:
                {
                  item.tags
                    .map((val) => hashtags(val))
                    .map((val) => moreHashtags(val))
                }
              </p>

            </div>
          );
        })}
      </div>
    );
  } else {
    return <div> Loading....</div>;
  }
}
