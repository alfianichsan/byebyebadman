import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { HeroSection, ItemList } from "../../components";
import { setProducts } from "../../config/redux/action";

const Home = () => {
  const { products, pages } = useSelector((state) => state.ProductsReducer);
  const dispatch = useDispatch();

  let isFilter = "all-products";
  let isSearch = "";
  let perPage = 4;
  let isPage = 1;

  useEffect(() => {
    dispatch(setProducts(isFilter, isSearch, perPage, isPage));
  }, [dispatch, isFilter, isSearch, perPage, isPage]);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <HeroSection />
      <p className="uppercase text-2xl font-medium text-center">New Products</p>
      <ItemList products={products} />
      <div className="mb-5 mt-1 p-1">
        <Link to="/products">
          <button className="border-2 border-solid border-slate-600 rounded-sm py-2 px-8 text-base font-medium transition ease-in-out hover:scale-110 duration-300">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
