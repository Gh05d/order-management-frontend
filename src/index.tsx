import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import App from "./components/app/app.component";
import Home from "./pages/home/home.page";
import NotFound from "./pages/not-found/not-found.page";

import reportWebVitals from "./reportWebVitals";
import client from "./common/apollo-client";
import { ApolloProvider } from "@apollo/client";
import Orders from "./pages/orders/orders.page";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="/orders" element={<Orders />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
