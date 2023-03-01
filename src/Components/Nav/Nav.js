import React from "react";
import "./Nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiMessageSquareDetail } from "react-icons/bi";
import { useState } from "react";

export default function Nav() {
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <nav>
      <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "activate" : ""}>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "activate" : ""}>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={() => setActiveNav("#experience")} className={activeNav === "#experience" ? "activate" : ""}>
        <BiBook />
      </a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "activate" : ""}>
        <RiServiceLine />
      </a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "activate" : ""}>
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
}
