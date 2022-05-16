import * as React from "react";

import Loading from "../../../../components/loading/loading.component";
import OrderCard from "../order-card/order-card.component";

import { FilterStates, SortStates } from "../../orders.types";

interface Props {
  orders: Order[];
  loading: boolean;
  sortBy: SortStates;
  filterBy: string;
  filterOn: FilterStates;
}

const RenderOrders: React.FC<Props> = ({ filterBy, filterOn, sortBy, loading, orders }) => {
  function selectSortFunction() {
    switch (sortBy) {
      case "created":
        return (a: Order, b: Order) => +a.createdAt - +b.createdAt;

      case "status":
        return (a: Order, b: Order) => {
          const nameA = a.status;
          const nameB = b.status;

          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          }

          return 0;
        };

      default:
        return (a: Order, b: Order) => {
          const nameA = a[sortBy]?.lastName || "ZZ";
          const nameB = b[sortBy]?.lastName || "ZZ";

          if (nameA < nameB) {
            return -1;
          } else if (nameA > nameB) {
            return 1;
          }

          return 0;
        };
    }
  }

  return (
    <ul className="card-list">
      {[...orders]
        .filter(order => {
          switch (filterOn) {
            case "customer":
              return order?.customer.lastName.toLowerCase().includes(filterBy.toLowerCase());

            case "employee":
              return order?.employee?.lastName.toLowerCase().includes(filterBy.toLowerCase());

            default:
              return false;
          }
        })
        .sort(selectSortFunction())
        .map(order => (
          <li key={order._id}>
            <OrderCard {...order} />
          </li>
        ))}

      {loading && <Loading text="Fetching orders..." />}
    </ul>
  );
};

export default RenderOrders;
