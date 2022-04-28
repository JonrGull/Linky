import React, { useRef } from "react";

export default function Input({ setUpload, upload}) {
  const linkRef = useRef(null);
  const descriptionRef =useRef(null);
  const tagsRef = useRef(null);

  let result;
  const pushedButton = () => {
    result = {
      link: linkRef.current.value,
      description: descriptionRef.current.value,
      tags:tagsRef.current.value
    };  
   return result;
  };

  function uploadedData () {
    let data = pushedButton();
    setUpload(data)
  }

  return (
    <div className="input-container">
      <p className="inputMessage">Post your recommendation!</p>
      <div className="inputLink-box">
        <label> Link:
          <input       
          type="text" 
          ref={linkRef}
          placeholder="Please input your URL"
          />
        </label>
      </div>
      <div className="inputDesc-box">
        <label> Description:
          <input       
          type="text"   
          ref={descriptionRef}    
          placeholder="Please input your comment for the URL"
          />
        </label>
      </div>
      <div className="inputTag-box">
        <label> Tags:
          <input       
          type="text" 
          ref={tagsRef} 
          placeholder="separate with , for multiple tags"
          />
        </label>
      </div>
    <button className="inputButton" onClick={uploadedData}>Post!</button>
    {/* <button onClick={()=>alert(tagsRef.current.value)}>test!</button> */}
    </div>
  );
}
