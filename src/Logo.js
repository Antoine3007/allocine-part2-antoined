import React from "react";
import LogoAllocine from "./logo-allocine.png";
import "./Logo.css";

class Logo extends React.Component {
  render() {
    return (
      <a href="http://www.allocine.fr/">
        <img alt="logo" src={LogoAllocine} className="logo" />
      </a>
    );
  }
}

export default Logo;
