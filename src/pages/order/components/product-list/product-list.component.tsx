import * as React from "react";
import ProductCard from "../product-card/product-card.component";

import "./product-list.component.scss";

interface Props {
  items: ProductOrder[];
}

const ProcuctList: React.FC<Props> = ({ items }) => (
  <section id="items">
    <h2>Items</h2>

    <div className="product-list">
      {items.map(item => (
        <ProductCard key={item.product._id} {...item.product} quantity={item.quantity} />
      ))}
    </div>
  </section>
);

export default ProcuctList;
