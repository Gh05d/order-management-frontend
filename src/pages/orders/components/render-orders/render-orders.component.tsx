import * as React from "react";
import { useQuery } from "@apollo/client";

import Loading from "../../../../common/loading/loading.component";
import Error from "../../../../common/error/error.component";
import OrderCard from "../order-card/order-card.component";

import { GET_ORDERS } from "../../order.graphql";
import { OrdersData, OrdersVars } from "../../order.types";
import "./render-orders.component.scss";

const RenderOrders: React.FC<{}> = () => {
  const { loading, error, data } = useQuery<OrdersData, OrdersVars>(GET_ORDERS);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;

  if (data?.orders?.length) {
    return (
      <ul className="orders-list">
        {data.orders.map(order => (
          <OrderCard {...order} />
        ))}
      </ul>
    );
  }
  return <div>Sorry, no orders yet</div>;
};

export default RenderOrders;
