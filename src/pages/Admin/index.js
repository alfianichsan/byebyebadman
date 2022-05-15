import React, { useEffect, useState } from "react";
import { Routes as Switch, Route, useNavigate } from "react-router-dom";
import { Dashboard, InsertProduct, DataProducts, Selling, EditProduct } from "../index";
import jwt_decode from "jwt-decode";
import Axios from "axios";
import { Sidebar } from "../../components";
import LogoutIcon from "@mui/icons-material/Logout";
import classes from "./Admin.module.css";

const Admin = () => {
  const history = useNavigate();
  const [filter, setFilter] = useState("all-products");

  const PopulateQuote = async () => {
    const req = await Axios({
      method: "get",
      url: "http://localhost:4000/v1/product/all-products",
      headers: { "x-access-token": localStorage.getItem("token") },
    });
    // console.log(req);
  };

  const logoutHandler = () => {
    localStorage.removeItem("token");
    history("/login", { replace: true });
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    // console.log(token);

    if (token) {
      const user = jwt_decode(token);
      if (!user) {
        localStorage.removeItem("token");
        history("/login");
      } else {
        PopulateQuote();
      }
    } else {
      history("/login", { replace: true });
    }
  }, []);

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 h-full">
        <div className="p-4 w-full h-20 bg-white shadow-lg flex items-center font-bold uppercase text-xl text-gray-500 ">
          <p>Dashboard ADMIN</p>
          <button className={classes["button-logout"]} onClick={logoutHandler}>
            <LogoutIcon className="mx-1" />
            Logout
          </button>
        </div>
        <div className="p-7 w-full h-full">
          <Switch>
            <Route path="/edit-product/:id" element={<EditProduct />} />
            <Route path="/data-products" element={<DataProducts filter={filter} />} />
            <Route path="/selling" element={<Selling />} />
            <Route path="/insert-product" element={<InsertProduct />} />
            <Route path="/*" element={<Dashboard />} />
          </Switch>
        </div>
      </div>
    </div>
  );
};

export default Admin;
