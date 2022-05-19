import React from "react";

const InputFile = (props) => {
  return (
    <>
      <img src={props.img} alt="imgPreview" id="imgPreview" className="h-64 object-cover" />
      <input type="file" onChange={props.changeImg} className="w-56 px-1 py-1 border my-2 border-solid border-slate-600 rounded focus:ring" />
    </>
  );
};

export default InputFile;
