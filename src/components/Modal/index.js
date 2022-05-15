import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div onClick={props.onClose} className="fixed top-0 left-0 w-full h-screen z-40 bg-gray-700 bg-opacity-75"></div>;
};
const ModalOverlay = (props) => {
  return <div className="fixed left-[8%] top-10 w-5/6 bg-white p-4 border-4 shadow-xl z-50 rounded-md overflow-y-scroll">{props.children}</div>;
};

const portalElement = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  );
};

export default Modal;
