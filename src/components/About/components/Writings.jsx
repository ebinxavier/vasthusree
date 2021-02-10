/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import { textColorPrimary, textColorSecondary } from "../../../constants";
import Hyphen from "../../Hyphen";
import * as Scroll from "react-scroll";

const Writings = () => {
  return (
    <Scroll.Element name="knowMore" offset={200}>
      <div style={{ color: textColorSecondary }}>
        <div style={{ fontSize: 15, color: textColorPrimary }}>
          <Hyphen /> ABOUT US
        </div>
        <div
          style={{ fontSize: 35, marginBottom: 25, color: textColorPrimary }}
        >
          Who We Are
        </div>
        <div>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p>
          Velit aliquet sagittis id consectetur. Elit sed vulputate mi sit. Gravida in fermentum et sollicitudin. Neque aliquam vestibulum morbi blandit cursus risus at. Ut tortor pretium viverra suspendisse potenti nullam ac tortor vitae. Vulputate odio ut enim blandit volutpat. Lobortis scelerisque fermentum dui faucibus in ornare quam. Mi proin sed libero enim. Scelerisque felis imperdiet proin fermentum. Ultrices vitae auctor eu augue ut lectus.
          </p>
          <p>
          Ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Mi eget mauris pharetra et. Mollis aliquam ut porttitor leo a diam. Arcu non sodales neque sodales ut etiam sit amet. Scelerisque in dictum non consectetur a erat nam at. Nunc non blandit massa enim nec dui nunc. Accumsan tortor posuere ac ut. Amet justo donec enim diam vulputate. Massa eget egestas purus viverra accumsan in. Risus nullam eget felis eget nunc.
          </p>
        </div>
      </div>
    </Scroll.Element>
  );
};

export default Writings;
