import Axios from "axios";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";

import classes from "./ProductDetail.module.css";

const ProductDetail = (props) => {
  // const dispatch = useDispatch();
  // const { product } = useSelector((state) => state.ProductDetailReducer);
  // const { id } = useParams();
  // const [isResult, setIsResult] = useState({});
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setIsLoading(true);
  //   dispatch(getProductDetail(id));
  //   setIsResult(product);
  //   console.log("product: ", isResult);
  //   setIsLoading(false);
  // }, [dispatch]);

  const { id } = useParams();
  const [isResult, setIsResult] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  async function getResult() {
    await Axios.get(`http://localhost:4000/v1/product/product/${id}`)
      .then(async (result) => {
        const response = await result.data;
        setIsResult(response.data);
        // console.log("data: ", isResult);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getResult();
  }, []);

  if (isLoading && !isResult.name) {
    return <Loading />;
  }

  return (
    <div className={classes["product-detail-container"]}>
      <div className={classes["image-container"]}>
        <div className={classes["main-image-container"]}>
          <img src={`http://localhost:4000/images/${isResult.images[0]}`} alt={isResult.name} className={classes["main-image"]} />
        </div>
        <div className={classes["secondary-image-container"]}>
          <img src={`http://localhost:4000/images/${isResult.images[0]}`} alt={isResult.name} className={classes["secondary-image"]} />
          <img src={`http://localhost:4000/images/${isResult.images[1]}`} alt={isResult.name} className={classes["secondary-image"]} />
          <img src={`http://localhost:4000/images/${isResult.images[2]}`} alt={isResult.name} className={classes["secondary-image"]} />
        </div>
      </div>
      <div className={classes["detail-product-container"]}>
        <p className={classes["title-product"]}>{isResult.name}</p>
        <p className={classes["price-product"]}>Rp. {isResult.price}</p>
        <div className={classes["details-wrapper"]}>
          <div className={classes["detail-wrapper"]}>
            <p className={classes["detail-tag"]}>Type : </p>
            <p className="uppercase">{isResult.type}</p>
          </div>
          <div className={classes["detail-wrapper"]}>
            <p className={classes["detail-tag"]}>Availability : </p>
            <p className="text-green-600 uppercase">{isResult.stock}</p>
          </div>
          <div className={classes["detail-wrapper"]}>
            <p className={classes["detail-tag"]}>Size : </p>
            <p className="uppercase">{isResult.size}</p>
          </div>
          <div className={classes["detail-wrapper"]}>
            <p className={classes["detail-tag"]}>Tags : </p>
            <p>{isResult.tag}</p>
          </div>
          <div className={classes["detail-wrapper"]}>
            <p className={classes["detail-tag"]}>PxL : </p>
            <p>{isResult.pxl}</p>
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
