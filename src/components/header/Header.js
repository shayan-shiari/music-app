import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/images/Melobit.svg";

const Header = () => {
  return (
    <header>
      <div>
        <img src={logo} alt="" />
        <Link to="/">Melobit</Link>
      </div>
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/play-list">PLAYLIST</Link>
      </nav>
    </header>
  );
};

export default Header;
