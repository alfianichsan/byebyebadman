import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";
import classes from "./Footer.module.css";
import { TiktokIcon, ShopeeIcon } from "../../assets/index";

const Footer = () => {
  return (
    <div className={classes["footer-wrapper"]}>
      <div className={classes["right-content"]}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1119.5893796355833!2d107.62621055923475!3d-6.883498798118005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e701259d7f05%3A0xc8040fb7e6a4c40a!2sJl.%20Cigadung%20Selatan%20No.22%2C%20Cigadung%2C%20Kec.%20Cibeunying%20Kaler%2C%20Kota%20Bandung%2C%20Jawa%20Barat%2040191!5e0!3m2!1sid!2sid!4v1650633106024!5m2!1sid!2sid"
          className="h-full w-full"
          frameBorder="0"
          title="Address"
          style={{ border: 0 }}
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </div>
      <div className={classes["left-content"]}>
        <p className={classes["title-content"]}>Address Store</p>
        <p className={classes["text-bordered"]}>Jln. Cigadung raya no 1 Rt 2 Rw 3 Bandung</p>
        <p className={classes["title-content"]}>Social Media & Partners</p>
        <div className="flex flex-row flex-wrap text-white">
          <a href="https://www.instagram.com/byebyebadman__/" target="_blank" className="hover:scale-110 mx-1">
            <InstagramIcon />
          </a>
          <a href={`https://api.whatsapp.com/send/?phone=6281214786871&text&app_absent=0`} target="_blank" className="hover:scale-110 mx-1">
            <WhatsAppIcon />
          </a>
          <a href={`https://gmail.com`} target="_blank" className="hover:scale-110 mx-1">
            <EmailIcon />
          </a>
          <a href={`https://tiktok.com`} target="_blank" className="hover:scale-110 mx-1">
            <img src={TiktokIcon} alt="tiktok" className="h-6" />
          </a>
          <a href={`https://shopee.co.id/byebyebadman__`} target="_blank" className="hover:scale-110 mx-1">
            <img src={ShopeeIcon} alt="shopee" className="h-6" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
