import React from "react";
import { Outlet } from "react-router-dom";

import Header from "../header/header.component";
import Footer from "../footer/footer.component";

import "../../common/styles/global.scss";
import "./app.component.scss";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default App;
