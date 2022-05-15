import React from "react";
import { useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  return <div className="h-screen">{id}</div>;
};

export default EditProduct;
