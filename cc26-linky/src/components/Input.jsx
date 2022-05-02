import React, { useRef } from "react";
import "../Input.css";
export default function Input({ postData, colorChoice }) {
  const linkRef = useRef(null);
  const descriptionRef = useRef(null);
  const tagsRef = useRef(null);

  const pushedButton = () => {
    let result = {
      link: linkRef.current.value,
      description: descriptionRef.current.value,
      tags: tagsRef.current.value,
    };
    linkRef.current.value = "";
    descriptionRef.current.value = "";
    tagsRef.current.value = "";
    return result;
  };


    const colors = ["#FA8072", "#FFD700", "#BDB76B", "#DDA0DD", "#90EE90", "#00FFFF"];
    const children = colors.map((val, i) => {
      return <div className="color" key={i} style={{background: val}} onClick={colorChoice}></div>
      
     })


  function uploadedData() {
    let data = pushedButton();
    postData(data);
  }

  return (
    <div className="input-container">
      <p className="inputMessage">Post your recommendation!</p>
      <div className="inputLink-box">
        {" "}
        <div className="inputLabel"> Link </div>
        <input
          type="text"
          className="input-box"
          ref={linkRef}
          placeholder="Please input your URL"
        />
      </div>
      <div className="inputDesc-box">
        {" "}
        <div className="inputLabel"> Description: </div>
        <input
          type="text"
          className="input-box"
          ref={descriptionRef}
          placeholder="Please write a description"
        />
      </div>
      <div className="inputTag-box">
        {" "}
        <div className="inputLabel"> Tags </div>
        <input
          className="input-box"
          type="text"
          ref={tagsRef}
          placeholder='separate with "," and no space'
        />
      </div>
     <div className="colors" id="colors" >{children}</div>
      <button className="inputButton" onClick={uploadedData}>
        Post!
      </button>
    </div>
  );
}


