import React from "react";

export default function Display({content}) {
// console.log("content in Display",content);
  if (content !== null) {
    const contentLink = content[0].link;
    // console.log(typeof contentLink)
    // console.log(contentLink)
  return (
    <div className="display-container" >
      <p className="displayMessage">Find your favorites</p>
        {content.map((item, index) => {
          const itemUrl = item.link;
          const itemTags = JSON.stringify(item.tags); // will be changed later!
          return (
            <div className="item-container" key={index} >
              <a href={contentLink}>Click the link!</a>
              <p>{item.description}</p>
            </div>
          )
        })

        }
        {/* <h1>Test</h1> */}
        {/* <a href={contentLink}>This is a youtube link</a> */}
    </div> 
  );
} else {
  return <div> "loading"...</div>
}
}
