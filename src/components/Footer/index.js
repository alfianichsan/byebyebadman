import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";

import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes["footer-wrapper"]}>
      <div className={classes["right-content"]}>
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1119.5893796355833!2d107.62621055923475!3d-6.883498798118005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e701259d7f05%3A0xc8040fb7e6a4c40a!2sJl.%20Cigadung%20Selatan%20No.22%2C%20Cigadung%2C%20Kec.%20Cibeunying%20Kaler%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040191!5e0!3m2!1sid!2sid!4v1650633106024!5m2!1sid!2sid"
          className="h-full w-full"
          frameBorder="0"
          title="Address"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        /> */}
      </div>
      <div className={classes["left-content"]}>
        <p className={classes["title-content"]}>Address Store</p>
        <p className={classes["text-bordered"]}>Jln. Cigadung raya no 1 Rt 2 Rw 3 Bandung</p>
        <p className={classes["title-content"]}>Social Media</p>
        <p className={classes["text-content"]}>
          <InstagramIcon />
        </p>
      </div>
    </div>
  );
};

export default Footer;
