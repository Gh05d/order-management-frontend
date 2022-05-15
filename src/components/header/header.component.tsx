import React, { KeyboardEvent } from "react";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

import logo from "./logo.jpg";
import "./header.component.scss";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const navigateToHome = () => navigate("/");

  const routes = [
    { route: "/", name: "Home" },
    { route: "/orders", name: "Orders" }
  ];

  function handleKeyPress(e: KeyboardEvent) {
    if (e.key == "Enter") {
      navigateToHome();
    }
  }

  return (
    <header id="header">
      <img
        tabIndex={0}
        role="link"
        aria-label="Home"
        onKeyUp={handleKeyPress}
        onClick={navigateToHome}
        src={logo}
        alt="San Francisco harbor with a lot of containers"
      />
      <span>Order Management System</span>
      <span>OMS</span>

      <nav>
        <ul>
          {routes.map(({ route, name }) => (
            <li key={name}>
              <Link to={route}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
