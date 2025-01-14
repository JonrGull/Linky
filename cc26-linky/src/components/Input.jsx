import React, { useRef } from "react";
import "../Input.css";
export default function Input({
  postData,
  colorChoice,
  darkMode,
  setUpdate,
  update,
}) {
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

  const colors = [
    "#FA8072",
    "#FFD700",
    "#BDB76B",
    "#DDA0DD",
    "#90EE90",
    "#00FFFF",
  ];
  const children = colors.map((val, i) => {
    return (
      <div
        className="color"
        key={i}
        style={{ background: val }}
        onClick={colorChoice}
      ></div>
    );
  });

  function uploadedData() {
    let data = pushedButton();
    postData(data);
    setUpdate(update + 1);
  }

  return (
    <div className={darkMode ? "input-container-dark" : "input-container"}>
      <p className={darkMode ? "inputMessage-dark" : "inputMessage"}>
        Post your recommendation!
      </p>
      <div className="inputLink-box">
        <div className={darkMode ? "inputLabel-dark" : "inputLabel"}>Link:</div>
        <input
          type="text"
          className="input-box"
          ref={linkRef}
          placeholder="Please input your URL"
        />
      </div>
      <div className="inputDesc-box">
        <div className={darkMode ? "inputLabel-dark" : "inputLabel"}>
          Description:
        </div>
        <input
          type="text"
          className="input-box"
          ref={descriptionRef}
          placeholder="Please write a description"
        />
      </div>
      <div className="inputTag-box">
        <div className={darkMode ? "inputLabel-dark" : "inputLabel"}>Tags:</div>
        <input
          className="input-box"
          type="text"
          ref={tagsRef}
          placeholder='Separate with "," and no space'
        />
      </div>
      <div className="colors" id="colors">
        {children}
      </div>
      <button
        className={darkMode ? "inputButton-dark" : "inputButton"}
        onClick={uploadedData}
      >
        Post!
      </button>
    </div>
  );
}
