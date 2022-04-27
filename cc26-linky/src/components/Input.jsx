import React, { useRef } from "react";

export default function Input(props) {
  const fileInput = useRef(null);

  const uploadLink = (event) => {
   
  };


  return (
    <div className="link-upload">
      <input       
      type="text"       
      />
       <input       
      type="text"       
      />
       <input       
      type="text"       
      />
    <button onClick={uploadLink}>Upload</button>
    </div>
  );
}
