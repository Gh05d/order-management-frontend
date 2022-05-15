import * as React from "react";
import { Link } from "react-router-dom";
import { createDateString } from "../../../../common/functions";

import "./order-card.component.scss";

const OrderCard: React.FC<Order> = props => {
  const createdTime = createDateString(props.createdAt);
  const updatedTime = createDateString(props.updatedAt);

  const fields = [
    { label: "", value: props.status },
    { label: "Number", value: props._id },
    { label: "createdAt", value: `${createdTime}` },
    { label: "updatedAt", value: `${updatedTime}` },
    {
      label: "Assigned to",
      value: props.employee
        ? `${props.employee.firstName} ${props.employee.lastName}`
        : "Not assigned"
    },
    { label: "Customer", value: `${props.customer.firstName} ${props.customer.lastName}` }
  ];

  return (
    <Link className="link-container" to={`/order/${props._id}`}>
      <div className="card order-card">
        {fields.map(field => (
          <div className="field-container" key={field.label}>
            <span className="label">{field.label}: </span>
            <span>{field.value}</span>
          </div>
        ))}
      </div>
    </Link>
  );
};

export default OrderCard;
