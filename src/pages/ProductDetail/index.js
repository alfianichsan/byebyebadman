import React from "react";
import { JohnCena } from "../../assets";

const ProductDetail = () => {
  return (
    <div className="h-screen  w-4/5 flex flex-row pt-14 ">
      <div className="h-full w-3/5 m-0 pt-8 flex flex-col items-center">
        <div className="p-0 m-0 h-2/3 w-2/3 ">
          <img src={JohnCena} alt="John Cena" className="object-cover w-full h-full" />
        </div>
        <div className="flex flex-row w-3/4 h-52 p-2  ">
          <img src={JohnCena} alt="John" className="h-full w-2/6 p-1" />
          <img src={JohnCena} alt="John" className="h-full w-2/6 p-1" />
          <img src={JohnCena} alt="John" className="h-full w-2/6 p-1" />
        </div>
      </div>
      <div className="h-full w-2/5 m-0 pt-8">
        <p>Right</p>
      </div>
    </div>
  );
};

export default ProductDetail;
