import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import search_icon from "../../assets/search_icon.svg";
import bell_icon from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <div class="navbar-left">
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Tv Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div class="navbar-right">
        <img src={search_icon} alt="" className="icons"/>
        <p>Children</p>
        <img src={bell_icon} alt="" className="icons"/>
        <div class="navbar-profile">
          <img src={profile_img} alt="" className="profile"/>
          <img src={caret_icon } alt="" />
          <div class="dropdown">
            <p>Sign Out Of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
