import React, { useState } from "react";
import { Link } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import classes from "./Navbar.module.css";
import { Divider } from "@mui/material";

const Navbar = () => {
  const [onExpand, setOnExpand] = useState(false);

  const expandIconHandler = () => {
    setOnExpand(!onExpand);
  };
  return (
    <div className="fixed w-full">
      <div className={classes["nav-primary-container"]}>
        {/* Search */}
        <div className={classes["search-wrapper"]}>
          <input className={classes["search-input"]} />
          <button>
            <SearchIcon />
          </button>
        </div>

        {/* Center Icon */}
        <div className={classes["center-logo"]}>
          <h1>BYEBYEBADMAN</h1>
        </div>

        {/* Cart and Login || Menu Bars */}
        <div className={classes["right-icon-wrapper"]}>
          <div className={classes["icons"]}>
            <Link to="/cart">
              <div className={classes["icon-style"]}>
                <div>
                  <ShoppingBagOutlinedIcon />
                </div>
                <p>Cart</p>
              </div>
            </Link>
            <Divider orientation="vertical" sx={{ height: 20, m: 0.5 }} />
            <Link to="/login">
              <div className={classes["icon-style"]}>
                <PersonOutlineIcon />
                <p>Login</p>
              </div>
            </Link>
          </div>
          <div className={classes["menu-bars"]} onClick={expandIconHandler}>
            {!onExpand ? <MenuIcon /> : <CloseIcon />}
          </div>
        </div>
        {/* Menu Bars */}
      </div>

      {/* Second Nav */}
      <div className={!onExpand ? classes["second-nav-container"] : classes["second-nav-container-active"]}>
        <ul className={classes["nav-menu-list"]}>
          <Link to="/" onClick={onExpand}>
            <li>Home</li>
          </Link>

          <Link to="/products" onClick={onExpand}>
            <li>All Products</li>
          </Link>

          <Link to="/categories" onClick={onExpand}>
            <li>Categories </li>
          </Link>

          <Link to="/contact" onClick={onExpand}>
            <li>Contact Us</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
