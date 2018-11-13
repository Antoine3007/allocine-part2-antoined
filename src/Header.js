import React from "react";
import Logo from "./Logo.js";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <Logo />
      </div>
    );
  }
}

export default Header;
