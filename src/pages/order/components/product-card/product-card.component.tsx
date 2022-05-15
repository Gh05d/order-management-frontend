import * as React from "react";

import "./product-card.component.scss";

interface Props extends Product {
  quantity: number;
}

const Product: React.FC<Props> = props => (
  <div className="product-card" title={props.description}>
    <img loading="lazy" src={props.image} alt={props.description} />
    <div className="column">
      <span className="label">Product name</span>
      <span>{props.name}</span>
    </div>

    <div className="column">
      <span className="label">Quantity</span>
      <span>{props.quantity}</span>
    </div>
  </div>
);

export default Product;
