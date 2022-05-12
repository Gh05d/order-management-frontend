import * as React from "react";

import RenderOrders from "./components/render-orders/render-orders.component";

import "./orders.page.scss";

interface Props {}

const Orders: React.FC<Props> = props => {
  return (
    <section id="orders">
      <h1>Orders</h1>

      <div className="list-tools">
        <input
          aria-label="Search Orders"
          id="search"
          type="search"
          placeholder="Search for an order"
        />

        <select aria-label="Sort orders" id="sort">
          <option>Sort orders by</option>
          <option>Order</option>
          <option>Customer</option>
          <option>Employee</option>
        </select>
      </div>

      <RenderOrders />
    </section>
  );
};

export default Orders;
