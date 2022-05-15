import * as React from "react";
import { useQuery } from "@apollo/client";

import Error from "../../../../components/error/error.component";
import Loading from "../../../../components/loading/loading.component";
import ProcuctList from "../product-list/product-list.component";

import { GET_ORDER } from "../../order.graphql";
import { OrderData, OrderVars } from "../../order.type";
import "./order-container.component.scss";
import SelectEmployee from "../select-employee/select-employee";
import { createDateString } from "../../../../common/functions";
import TransitionButton from "../transition-button/transition-button.component";

interface Props {
  id: string;
}

const Order: React.FC<Props> = ({ id }) => {
  const { loading, error, data } = useQuery<OrderData, OrderVars>(GET_ORDER, {
    variables: { id }
  });

  if (loading) return <Loading text="Fetching orders..." />;
  if (error) return <Error error={error} />;
  if (!data) return <div>Sorry, something went wrong</div>;

  return (
    <div className="order-container">
      <div id="order-number">
        <span>Order number:</span>
        <span>{id}</span>
      </div>

      <div id="created">
        <span>Created at:</span>
        <span>{createDateString(data.order.createdAt)}</span>
      </div>

      <div id="updated">
        <span>Updated at:</span>
        <span>{createDateString(data.order.updatedAt)}</span>
      </div>

      <TransitionButton orderID={id} status={data?.order.status} />

      <div id="assignee">
        {data?.order.employee ? (
          <React.Fragment>
            <label htmlFor="employee-select">Assigned to:</label>
            <span>{`${data?.order.employee?.firstName} ${data?.order.employee?.lastName}`}</span>
          </React.Fragment>
        ) : (
          <SelectEmployee orderID={id} />
        )}
      </div>

      <section id="address">
        <h2>Shipment to:</h2>
        <address>
          <div>
            <b>{`${data?.order.customer.firstName} ${data?.order.customer.lastName}`}</b>
          </div>
          {data?.order.address.street && (
            <div>{`${data?.order.address.street} ${data?.order.address.houseNumber || ""}`}</div>
          )}
          <div>
            <b>{data?.order.address.zip}</b> <span>{data?.order.address.city}</span>
          </div>
          <div>{data?.order.address.country}</div>
        </address>
      </section>

      <div id="total">
        <span>Total value:</span>
        <span>{data?.order.totalPrice} €</span>
      </div>

      <ProcuctList items={data.order.items} />
    </div>
  );
};

export default Order;
