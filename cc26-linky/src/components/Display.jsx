import React from "react";

export default function Display({content}) {

  if (content !== null) {
    const contentLink = content[0].link;
    console.log(typeof contentLink)
    console.log(contentLink)
  return (
    <div className="display-container" >
      <div className="item-container">
        <h1>Test</h1>
        <a href={contentLink}>This is a youtube link</a>
      </div>
    </div> 
  );
} else {
  return <div> "loading"...</div>
}
}
