import React from "react";
import { Link } from "react-router-dom";
import { JohnCena } from "../../assets";

import classes from "./ItemList.module.css";

const DUMMY = [
  {
    id: "p1",
    productName: "John Cena",
    img: JohnCena,
    price: 250000,
  },
  {
    id: "p2",
    productName: "Randy Orton",
    img: JohnCena,
    price: 250000,
  },
  {
    id: "p3",
    productName: "BrockLesnar",
    img: JohnCena,
    price: 250000,
  },
  {
    id: "p4",
    productName: "Harry Maguire",
    img: JohnCena,
    price: 250000,
  },
  {
    id: "p5",
    productName: "LinkinPark",
    img: JohnCena,
    price: 250000,
  },
  {
    id: "p6",
    productName: "Champion",
    img: JohnCena,
    price: 250000,
  },
];

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
  return (
    <div className={classes["item-list-wrapper"]}>
      <div className={classes["item-content"]}>
        {DUMMY.map((product) => (
          <Card key={product.id} name={product.productName} img={product.img} price={product.price} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
