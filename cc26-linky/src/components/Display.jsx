import React from "react";

export default function Display({content}) {
  if (content !== null) {
    
  return (
    <div className="display-container" >
      <p className="displayMessage">Find your favorites</p>
        {content.map((item, index) => {
          let strTags = "";
          const itemUrl = item.link;
          for(let i=0; i < item.tags.length ; i++){
            strTags += "#" + item.tags[i] + "  ";
          }
        return (
          <div className="item-container" key={index} >
           <a href={itemUrl}>Click the link!</a>
           <p className="item-desc">{item.description}</p>
           <p className="item-tags">{strTags}</p>
          </div>
          )
        })
        }
    </div> 
  );
} else {
    return (
    <div> Loading....</div>
   )
 }
}
