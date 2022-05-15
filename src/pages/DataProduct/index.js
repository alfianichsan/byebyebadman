import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../../config/redux/action";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import { Link } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import Axios from "axios";
import { DetailModal } from "../index";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import AddIcon from "@mui/icons-material/Add";

const DataProducts = () => {
  const { products, pages } = useSelector((state) => state.ProductsReducer);
  const dispatch = useDispatch();
  const [isFilter, setIsFilter] = useState("all-products");
  const [isSearch, setIsSearch] = useState("");
  const [perPage, setPerPage] = useState(5);
  const [idProduct, setIdProduct] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [isPage, setIsPage] = useState(1);

  if (isFilter === "") {
    setIsFilter("all-products");
  }
  useEffect(() => {
    dispatch(setProducts(isFilter, isSearch, perPage, isPage));
    // console.log("product:", products);
  }, [isFilter, isPage]);

  const confirmDelete = (id) => {
    confirmAlert({
      title: "Delete Product",
      message: "Are you sure to do this.",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            Axios.delete(`http://localhost:4000/v1/product/deleteProduct/${id}`)
              .then((res) => {
                // console.log(res.data);
                dispatch(setProducts(isFilter, isSearch, perPage, 1));
              })
              .catch((err) => {
                console.log(err);
              });
            // console.log("data deleted", id);
          },
        },
        {
          label: "No",
          onClick: () => console.log("data not deleted"),
        },
      ],
    });
  };

  const detailHandler = (event) => {
    event.preventDefault();

    // console.log(event.target.value);
    setIdProduct(event.target.value);
    setShowModal(!showModal);
  };

  const onClose = () => {
    setShowModal(false);
  };
  const nextPage = () => {
    if (isPage < pages.totalPage) {
      setIsPage(isPage + 1);
    } else {
      setIsPage(isPage);
    }
  };
  const prevPage = () => {
    if (isPage > 1) {
      setIsPage(isPage - 1);
    } else {
      setIsPage(1);
    }
  };
  const onChangeFilter = (event) => {
    let filter = event.target.value;
    if (filter === "") {
      filter = "all-products";
    }
    event.preventDefault();
    setIsFilter(filter);
    setIsPage(1);
  };

  return (
    <div className="flex flex-col w-full h-screen">
      {showModal && <DetailModal idProduct={idProduct} onClose={onClose} />}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-auto">
        <div className="w-full bg-white rounded flex flex-row p-2 items-center">
          <p className="font-normal mr-4">Filter by : </p>
          <div className="flex flex-row justify-center cursor-pointer">
            <select onChange={onChangeFilter} className="w-36 border-2 border-solid rounded-sm border-gray-500">
              <option value="all-products">All Products</option>
              <option value="t-shirt/long-sleeves">T-Shirts & Long Sleeves</option>
              <option value="shirts/polos">Shirts & Polos</option>
              <option value="bottoms/trousers">Bottoms & Trousers</option>
              <option value="shorts/swimwear">Shorts & Swimwear</option>
              <option value="hoodies/sweatshirts">Hoodies & Sweatshirts</option>
              <option value="jacket/coats">Jackets & Coats</option>
              <option value="footwear">Footwear</option>
            </select>
            <Link to="/admin/insert-product" className="px-2 py-2 flex flex-row ml-8 border-2 border-gray-500 rounded hover:ring ring-emerald-500">
              <p className="mr-2">Add Product</p>
              <AddIcon />
            </Link>
          </div>
        </div>
        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-1">Product</th>
              <th className="px-6 py-1">Product name</th>
              <th className="px-6 py-1">Category</th>
              <th className="px-6 py-1">Stock</th>
              <th className="px-6 py-1">Price</th>
              <th className="px-6 py-1">
                <SettingsRoundedIcon />
              </th>
            </tr>
          </thead>
          <tbody>
            {products.map((data) => (
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={data._id}>
                <td className="px-6 py-2 flex justify-center">
                  <img alt={data.name} src={`http://localhost:4000/images/${data.images[0]}`} className="h-32" />
                </td>
                <td className="px-6 py-2">{data.name}</td>
                <td className="px-6 py-2">{data.type}</td>
                <td className="px-6 py-2 uppercase">{data.stock}</td>
                <td className="px-6 py-2">{data.price}</td>
                <td className="px-6 py-2 text-center">
                  <div className="flex flex-wrap justify-items-start">
                    <button value={data._id} className="font-semibold px-2 mt-2 py-1 hover:ring rounded" onClick={detailHandler}>
                      Detail
                    </button>
                    <Link to={{ pathname: `/admin/edit-product/${data._id}`, params: data._id }} className="font-semibold px-2 mt-2 py-1 hover:ring rounded">
                      Edit
                    </Link>
                    <button className="font-semibold px-2 mt-2 py-1 hover:ring rounded" onClick={() => confirmDelete(data._id)}>
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex flex-row mt-2">
        <div className="bg-white rounded-md border flex flex-row mt-2">
          <div className="hover:ring-1 ring-red-600 rounded-l-md cursor-pointer">
            <ArrowBackIosNewRoundedIcon sx={{ fontSize: 18 }} onClick={prevPage} />
          </div>
          <div className="mx-3">
            <div className="">
              {pages.currentPage} / {pages.totalPage}
            </div>
          </div>
          <div className="hover:ring-1 ring-red-600 rounded-r-md cursor-pointer">
            <ArrowForwardIosRoundedIcon sx={{ fontSize: 18 }} onClick={nextPage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataProducts;
