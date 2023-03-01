import React from "react";
import CTA from "./CTA";
import "./Header.css";
import ME from "../../assets/4ndr125.png";
import HeaderSocial from "./HeaderSocial";

export default function Header() {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hallo I'm</h5>
        <h1>Andri</h1>
        <h5 className="text-light">Fullstack Devoloper</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className="scroll__down">
          scroll down
        </a>
      </div>
    </header>
  );
}


