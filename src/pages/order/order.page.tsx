import * as React from "react";
import { useParams } from "react-router-dom";

import Order from "./components/order-container/order-container.component";

import "./order.page.scss";

const OrderPage: React.FC<{}> = () => {
  const { id } = useParams<"id">();

  return (
    <section id="order">
      <h1>Order {id}</h1>

      {id && <Order id={id} />}
    </section>
  );
};

export default OrderPage;
