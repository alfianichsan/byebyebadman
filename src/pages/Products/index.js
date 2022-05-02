import React from "react";
import { Link } from "react-router-dom";
import { ItemList } from "../../components";

import classes from "./Products.module.css";

const Products = () => {
  return (
    <div className={classes["products-container"]}>
      <div className={classes["left-categories-container"]}>
        <div className={classes["categories-wrapper"]}>
          <p className={classes["categories-title"]}>Categories</p>
          <div className={classes["option-wrapper"]}>
            <Link to="/product/id" className={classes["categories-option"]}>
              All Product
            </Link>
            <Link to="/product/id" className={classes["categories-option"]}>
              T-shirt
            </Link>
            <Link to="/product/id" className={classes["categories-option"]}>
              Jacket
            </Link>
            <Link to="/product/id" className={classes["categories-option"]}>
              Crewneck
            </Link>
            <Link to="/product/id" className={classes["categories-option"]}>
              T-shirt
            </Link>
          </div>
          {/* <div className={classes["option-res"]}>
            <select class={classes["select-categories"]}>
              <option value="all-product">
                <Link to="/product/id" className={classes["categories-option"]}>
                  All Product
                </Link>
              </option>
              <option>
                <Link to="/product/id" className={classes["categories-option"]}>
                  All Product
                </Link>
              </option>
              <option>
                <Link to="/product/id" className={classes["categories-option"]}>
                  All Product
                </Link>
              </option>
            </select>
          </div> */}
        </div>
      </div>
      <div className={classes["right-products-container"]}>
        <ItemList />
      </div>
    </div>
  );
};

export default Products;
