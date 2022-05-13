import * as React from "react";

import { Order } from "../../order.types";
import "./order-card.component.scss";

const OrderCard: React.FC<Order> = props => {
  const [createdDate, createdTime] = props.created.split("T");
  const [normalizedCreatedTime] = createdTime.split(".");

  if (props.updated) {
    var [updatedDate, updatedTime] = props.updated.split("T");
    var [normalizedUpdatedTime] = updatedTime.split(".");
  }

  const fields = [
    { label: "", value: props.state },
    { label: "Number", value: props._id },
    { label: "Created", value: `${createdDate} ${normalizedCreatedTime}` },
    {
      label: "Updated",
      value: props.updated && `${updatedDate} ${normalizedUpdatedTime}`
    },
    { label: "Assigned to", value: `${props.employee.firstName} ${props.employee.lastName}` },
    { label: "Customer", value: `${props.customer.firstName} ${props.customer.lastName}` }
  ];

  return (
    <div className="order-card">
      {fields.map(field => (
        <div className="field-container" key={field.label}>
          <span className="label">{field.label}: </span>
          <span>{field.value}</span>
        </div>
      ))}
    </div>
  );
};

export default OrderCard;
