import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Axios from "axios";

import classes from "./ItemList.module.css";

const Card = (props) => {
  return (
    <Link to="/product/:id">
      <div className={classes["card-container"]}>
        <img src={props.img} alt={props.name} className={classes["product-img"]} />
        <p className={classes["product-name"]}>{props.name}</p>
        <p className={classes["product-price"]}>Rp. {props.price}</p>
      </div>
    </Link>
  );
};

const ItemList = () => {
  const { products } = useSelector((state) => state.ProductsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get("http://localhost:4000/v1/product/all-products")
      .then((result) => {
        const response = result.data;

        dispatch({ type: "GET_ALL_PRODUCTS", payload: response.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className={classes["item-list-wrapper"]}>
      <div className={classes["item-content"]}>
        {products.map((product) => (
          <Card key={product._id} name={product.name} img={`http://localhost:4000/images/${product.images[0]}`} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
