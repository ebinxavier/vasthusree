import React from "react";
import {
  textColorPrimary,
  textColorSecondary,
} from "../../constants";
import SocialIcons from "./components/SocialIcons";

const Footer = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: 50,
        color: textColorSecondary,
      }}
    >
      <div
        style={{
          color: textColorPrimary,
          fontSize: 20,
          fontWeight: "bold",
          paddingBottom: 15,
        }}
      >
        AROUND THE WEB
      </div>
      <SocialIcons />
      <div>Vasthu Sree</div>
      <div>
        Email:{" "}
        <a
          href="mailto:vasthusree@gmail.com"
          style={{ textDecoration: "none", color: textColorPrimary }}
        >
          vasthusree@gmail.com
        </a>
        {", "}Mobile:{" "}
        <a
          href="tel:+918089578001"
          style={{ textDecoration: "none", color: textColorPrimary }}
        >
          +91-8089578001
        </a>
      </div>
      {/* <div>© {new Date().getFullYear()}, Made with ❤️</div> */}
    </div>
  );
};

export default Footer;
