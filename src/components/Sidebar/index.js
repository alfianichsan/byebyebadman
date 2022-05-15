import React, { useState } from "react";

import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import LogoutIcon from "@mui/icons-material/Logout";
import { Logo2 } from "../../assets";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Sidebar.module.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const history = useNavigate();
  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    history("/login", { replace: true });
  };
  return (
    <div className={`${isOpen ? "w-72" : "w-20"} h-auto bg-rose-700 p-5 pt-8 text-white font-semibold text-lg relative transition-all ease-out delay-75 shadow-2xl`}>
      <img src={Logo2} alt="logo" className={`h-14 ${!isOpen && "scale-0"} duration-200`} />
      <p className={`text-xl font-bold pt-1 ${!isOpen && "scale-x-0"} duration-200`}>BYEBYEBADMAN</p>
      <MenuRoundedIcon onClick={openHandler} sx={{ fontSize: 40 }} className={`rounded-md hover:outline-none hover:ring hover:ring-gray-200 cursor-pointer absolute top-9 w-7 right-5 ${!isOpen && "ring ring-gray-300"}`} />
      <div className="pt-6 flex flex-col justify-center font-medium ml-1">
        <Link to="/admin" className={`py-4 flex flex-row items-center uppercase text-sm font-semibold ${isOpen && " hover:border-b-2"}`}>
          <HomeOutlinedIcon sx={{ fontSize: 28 }} className={`mr-2 rounded ${!isOpen && "hover:ring hover:ring-gray-200"}`} />
          <p className={`${!isOpen && "scale-0"}`}>Dashboard</p>
        </Link>
        <Link to="/admin/data-products" className={`py-4 flex flex-row items-center uppercase text-sm font-semibold ${isOpen && " hover:border-b-2"}`}>
          <Inventory2Icon sx={{ fontSize: 28 }} className={`mr-2 rounded ${!isOpen && "hover:ring hover:ring-gray-200"}`} />
          <p className={`${!isOpen && "scale-0"}`}>Data Product</p>
        </Link>
        <Link to="/admin/selling" className={`py-4 flex flex-row items-center uppercase text-sm font-semibold ${isOpen && " hover:border-b-2"}`}>
          <AttachMoneyIcon sx={{ fontSize: 28 }} className={`mr-2 rounded ${!isOpen && "hover:ring hover:ring-gray-200"}`} />
          <p className={`${!isOpen && "scale-0"}`}>Selling</p>
        </Link>
      </div>
      <div className={classes["button-logout"]}>
        <div onClick={logoutHandler} className={`ml-1 w-full py-4 flex flex-row items-center cursor-pointer uppercase text-sm font-semibold ${isOpen && " hover:border-b-2"}`}>
          <LogoutIcon sx={{ fontSize: 28 }} className={`mr-2 rounded ${!isOpen && "hover:ring hover:ring-gray-200"}`} />
          <p className={`${!isOpen && "scale-0"}`}>Logout</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
