import React, { useEffect, useState } from "react";
import { ItemList } from "../../components";
import { setProducts } from "../../config/redux/action";

import classes from "./Products.module.css";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIosOutlinedIcon from "@mui/icons-material/ArrowBackIosOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import { useDispatch, useSelector } from "react-redux";

const Products = () => {
  const { products, pages } = useSelector((state) => state.ProductsReducer);
  const dispatch = useDispatch();

  const [isFilter, setIsfilter] = useState("all-products");
  const [isSearch, setIsSearch] = useState("");
  const [perPage, setPerPage] = useState(9);
  const [isPage, setIsPage] = useState(1);

  useEffect(() => {
    dispatch(setProducts(isFilter, isSearch, perPage, isPage));
  }, [dispatch, isFilter, isSearch, perPage, isPage]);

  const onChangeFilter = (event) => {
    event.preventDefault();
    let filter = event.target.value;
    if (filter === "") {
      filter = "all-products";
    }
    setIsfilter(filter);
    setIsPage(1);
  };

  const onSearchChange = (event) => {
    const search = event.target.value;
    setIsSearch(search);
  };
  const nextPage = () => {
    if (isPage < pages.totalPage) {
      setIsPage(isPage + 1);
    } else {
      setIsPage(isPage);
    }
    scrollTop();
  };
  const prevPage = () => {
    if (isPage > 1) {
      setIsPage(isPage - 1);
    } else {
      setIsPage(1);
    }
    scrollTop();
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={classes["products-container"]}>
      <div className={classes["left-categories-container"]}>
        <div className={classes["categories-wrapper"]}>
          <p className={classes["categories-title"]}>Products</p>
          <div className={classes["option-wrapper"]}>
            <option onClick={onChangeFilter} value="all-products">
              All Products
            </option>
            <option onClick={onChangeFilter} value="t-shirt/long-sleeves">
              T-Shirts & Long Sleeves
            </option>
            <option onClick={onChangeFilter} value="shirts/polos">
              Shirts & Polos
            </option>
            <option onClick={onChangeFilter} value="bottoms/trousers">
              Bottoms & Trousers
            </option>
            <option onClick={onChangeFilter} value="shorts/swimwear">
              Shorts & Swimwear
            </option>
            <option onClick={onChangeFilter} value="hoodies/sweatshirts">
              Hoodies & Sweatshirts
            </option>
            <option onClick={onChangeFilter} value="jacket/coats">
              Jackets & Coats
            </option>
            <option onClick={onChangeFilter} value="footwear">
              Footwear
            </option>
          </div>
          <div className={classes["option-res"]}>
            <select onChange={onChangeFilter} className={classes["select-categories"]}>
              <option value="all-products">All Products</option>
              <option value="t-shirt/long-sleeves">T-Shirts & Long Sleeves</option>
              <option value="shirts/polos">Shirts & Polos</option>
              <option value="bottoms/trousers">Bottoms & Trousers</option>
              <option value="shorts/swimwear">Shorts & Swimwear</option>
              <option value="hoodies/sweatshirts">Hoodies & Sweatshirts</option>
              <option value="jacket/coats">Jackets & Coats</option>
              <option value="footwear">Footwear</option>
            </select>
            <input className={classes["search-input"]} onChange={onSearchChange} />
            <button>
              <SearchIcon />
            </button>
          </div>
        </div>
      </div>
      <div className={classes["right-products-container"]}>
        <ItemList products={products} />
        {pages.totalPage > 0 && (
          <div className="w-4/6 flex flex-row justify-evenly mt-8">
            <ArrowBackIosOutlinedIcon sx={{ fontSize: 26 }} className="cursor-pointer hover:ring-2 rounded-md ring-gray-500" onClick={prevPage} />
            <p className="font-mono text-lg">
              {isPage}/{pages.totalPage}
            </p>
            <ArrowForwardIosOutlinedIcon sx={{ fontSize: 26 }} className="cursor-pointer hover:ring-2 rounded-md ring-gray-500" onClick={nextPage} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
