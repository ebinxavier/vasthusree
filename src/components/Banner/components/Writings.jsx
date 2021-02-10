import React from "react";
import Button from "../../Button";
import { textColorPrimary, textColorSecondary } from "../../../constants";
import Hyphen from "../../Hyphen";
import * as Scroll from "react-scroll";
import { isMobile } from "react-device-detect";

const Writings = () => {
  return (
    <div style={{ color: textColorSecondary, padding: "100px 0 50px 0" }}>
      {/* <div style={{ fontSize: 20, marginBottom: 20 }}>Hello, We Are</div> */}
      <div
        style={{ fontSize: 50, color: textColorPrimary, fontWeight: "bold" }}
      >
        Vasthu Sree
      </div>
      <div
        style={{ fontSize: 30, color: textColorPrimary }}
      >
        ( വാസ്തു ശ്രീ )
      </div>
      <div>
        <Hyphen />
        <span>
          A Vasthu and Architectural consultancy center.
        </span>
      </div>
      <div style={{ paddingTop: isMobile ? 20 : 10 }}>
        <Scroll.Link to="knowMore">
          <Button>KNOW MORE</Button>
        </Scroll.Link>
      </div>
    </div>
  );
};

export default Writings;
