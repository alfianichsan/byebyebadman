import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderButton = (props) => {
  const { price, name, size, type, stock, tag } = props;
  const [isStock, setStock] = useState(true);

  useEffect(() => {
    if (stock === "ready") {
      setStock(true);
    } else {
      setStock(false);
    }
  }, [stock]);
  const orderHandler = () => {
    const format = price.toString().split("").reverse().join("");
    const convert = format.match(/\d{1,3}/g);
    const rupiah = "Rp " + convert.join(".").split("").reverse().join("");

    if (isStock) {
      window.open(`https://api.whatsapp.com/send/?phone=6281214786871&text=
      Saya ingin pesan product berikut%0a
      =============================%0a
      Product Name  : ${name}%0a
      tag  : ${tag}%0a
      Size  : ${size.toUpperCase()}%0a
      Tipe  : ${type}%0a
      Harga : ${rupiah}%0a
      `);
    } else {
      toast.warn("Sorry, this product not ready", {
        position: "top-center",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <button onClick={orderHandler} className="border-2 border-solid border-gray-400 hover:border-gray-700 hover:scale-105 transition-all ease-out px-5 py-2 rounded-sm font-semibold text-gray-600">
        Order Now
      </button>
    </>
  );
};

export default OrderButton;
