import * as React from "react";

import { Order } from "../../order.types";
import "./order-card.component.scss";

const OrderCard: React.FC<Order> = props => {
  const fields = [
    { label: "Number", value: props._id },
    { label: "Created", value: props.created },
    { label: "Updated", value: props.updated },
    { label: "Assigned to", value: `${props.employee.firstName} ${props.employee.lastName}` },
    { label: "Customer", value: `${props.customer.firstName} ${props.customer.lastName}` }
  ];

  return (
    <div className="order-card">
      {fields.map(field => (
        <div className="field-container" key={field.label}>
          <span className="label">{field.label}: </span>
          <span>{field.value || "No"}</span>
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
