import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import classes from "./ItemList.module.css";
import { setProducts } from "../../config/redux/action";

const Card = (props) => {
  return (
    <Link to={{ pathname: `/product/${props.id}`, params: props.id }} id={props.id}>
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
    dispatch(setProducts());
    // console.log(products);
  }, [dispatch]);

  return (
    <div className={classes["item-list-wrapper"]}>
      <div className={classes["item-content"]}>
        {products.map((product) => (
          <Card key={product._id} id={product._id} name={product.name} img={`http://localhost:4000/images/${product.images[0]}`} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
