import React from "react";

import logo from "./logo.jpg";
import "./header.component.scss";

const Header: React.FC = () => (
  <header>
    <div>
      <img width={75} height={50} src={logo} alt="San Francisco harbor with a lot of containers" />
      <span>Order Management System</span>
    </div>

    <nav></nav>
  </header>
);

export default Header;
