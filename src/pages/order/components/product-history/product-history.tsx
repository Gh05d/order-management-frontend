import { useQuery } from "@apollo/client";
import * as React from "react";
import { createDateString } from "../../../../common/functions";
import Error from "../../../../components/error/error.component";
import Loading from "../../../../components/loading/loading.component";
import { FETCH_HISTORY } from "../../order.graphql";
import { FetchHistoryVars, HistoryStatusData } from "../../order.type";

import "./product-history.scss";

interface Props {
  orderID: string;
}

const ProductHistory: React.FC<Props> = ({ orderID }) => {
  const { loading, error, data } = useQuery<HistoryStatusData, FetchHistoryVars>(FETCH_HISTORY, {
    variables: { orderID }
  });

  if (loading) return <Loading text="Fetching orders..." />;
  if (error) return <Error error={error} />;
  if (!data) return <div>Sorry, something went wrong</div>;

  return (
    <section id="product-history">
      <h2>Product history</h2>
      <ul>
        {data.orderStatusHistory.map(orderStatus => (
          <li className="card" key={orderStatus._id}>
            <span>{orderStatus.status}</span>
            <span>{createDateString(orderStatus.createdAt)}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ProductHistory;
