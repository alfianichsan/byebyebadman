import React from "react";
import { JohnCena, Motley } from "../../assets";

import classes from "./ProductDetail.module.css";

const ProductDetail = (props) => {
  return (
    <div className={classes["product-detail-container"]}>
      <div className={classes["image-container"]}>
        <div className={classes["main-image-container"]}>
          <img src={JohnCena} alt="John Cena" className={classes["main-image"]} />
        </div>
        <div className={classes["secondary-image-container"]}>
          <img src={JohnCena} alt="John" className={classes["secondary-image"]} />
          <img src={Motley} alt="John" className={classes["secondary-image"]} />
          <img src={JohnCena} alt="John" className={classes["secondary-image"]} />
        </div>
      </div>
      <div className={classes["detail-product-container"]}>
        <p className={classes["title-product"]}>John Cena Vintage</p>
        <p className={classes["price-product"]}>Rp. 150.000</p>
        <div className={classes["details-wrapper"]}>
          <div className={classes["detail-wrapper"]}>
            <p className={classes["detail-tag"]}>Availability : </p>
            <p className="text-green-600">In Stock</p>
          </div>
          <div className={classes["detail-wrapper"]}>
            <p className={classes["detail-tag"]}>Size : </p>
            <p>XL</p>
          </div>
          <div className={classes["detail-wrapper"]}>
            <p className={classes["detail-tag"]}>Tags : </p>
            <p>Gildan Ultra Cotton</p>
          </div>
          <div className={classes["detail-wrapper"]}>
            <p className={classes["detail-tag"]}>PxL : </p>
            <p>20 x 10</p>
          </div>
        </div>
        <div className={classes["order-button-container"]}>
          <button className="border-2 border-solid border-gray-400 hover:border-gray-700 hover:scale-105 transition-all ease-out px-5 py-2 rounded-sm font-semibold text-gray-600 ">Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
