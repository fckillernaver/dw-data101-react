import React from "react";
import "./SampleHeader.css";
import SampleLoginButton from "./SampleLoginButton";

const SampleHeader = () => {
  return (
    <header id="header">
      <button id="logo">N</button>
      <ul>
        <li>
          <SampleLoginButton />
        </li>
        <li>
          <button className="hb l">로그인</button>
        </li>
      </ul>
    </header>
  );
};

export default SampleHeader;
