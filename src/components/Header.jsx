import React from "react";
import logo from "../assets/investment-calculator-logo.png";

const Header = () => {
  return (
    <header id="header">
      <img src={logo} alt="App logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
};

export default Header;
