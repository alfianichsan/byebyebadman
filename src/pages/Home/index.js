import React from "react";
import { Link } from "react-router-dom";
import { HeroSection, ItemList } from "../../components";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <HeroSection />
      <p className="uppercase text-2xl font-medium text-center">New Products</p>
      <ItemList />
      <div className="mb-5 mt-1 p-1">
        <Link to="/products">
          <button className="border-2 border-solid border-slate-600 rounded-sm py-2 px-8 text-base font-medium transition ease-in-out hover:scale-110 duration-300">View All</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
