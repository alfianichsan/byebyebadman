import React from "react";

const Loading = () => {
  return (
    <div className="h-screen w-full flex flex-row justify-center text-center items-center transition-all ease-out">
      <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full mx-5">
        <span className="sr-only">test</span>
      </div>
      Loading ...
    </div>
  );
};

export default Loading;
