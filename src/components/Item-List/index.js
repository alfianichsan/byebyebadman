import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import classes from "./ItemList.module.css";

const Card = (props) => {
  const [isStock, setStock] = useState("");
  const { price, stock } = props;

  const format = price.toString().split("").reverse().join("");
  const convert = format.match(/\d{1,3}/g);
  const rupiah = "Rp. " + convert.join(".").split("").reverse().join("");

  useEffect(() => {
    if (stock === "ready") {
      setStock(rupiah);
    } else {
      setStock("SOLD");
    }
  }, [stock]);

  return (
    <Link to={{ pathname: `/product/${props.id}`, params: props.id }} id={props.id} price={rupiah}>
      <div className={classes["card-container"]}>
        <img src={props.img} alt={props.name} className={classes["product-img"]} />
        <p className={classes["product-name"]}>{props.name}</p>
        <p className={classes["product-price"]}> {isStock} </p>
      </div>
    </Link>
  );
};

const ItemList = (props) => {
  // const { products, pages } = useSelector((state) => state.ProductsReducer);
  // const dispatch = useDispatch();
  // const { search, filter, perPage, page } = props;

  // useEffect(() => {
  //   dispatch(setProducts(filter, search, perPage, page));
  // }, [dispatch, props]);
  const { products } = props;

  // console.log(products);

  if (products <= 0) {
    return (
      <div className="h-screen w-full flex justify-center items-center text-lg font-mono -mt-24">
        <p>No Product Found</p>
      </div>
    );
  }

  return (
    <div className={classes["item-list-wrapper"]}>
      <div className={classes["item-content"]}>
        {products.map((product) => (
          <Card key={product._id} id={product._id} name={product.name} img={`http://localhost:4000/images/${product.images[0]}`} price={product.price} stock={product.stock} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
