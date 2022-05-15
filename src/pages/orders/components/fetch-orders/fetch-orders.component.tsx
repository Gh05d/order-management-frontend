import * as React from "react";
import { useQuery } from "@apollo/client";

import Loading from "../../../../components/loading/loading.component";
import Error from "../../../../components/error/error.component";

import { GET_ORDERS } from "../../orders.graphql";
import { FilterStates, OrdersData, OrdersVars, SortStates } from "../../orders.types";
import { debounce } from "../../../../common/functions";
import RenderOrders from "../render-orders/render-orders.component";

interface Props {
  sortBy: SortStates;
  filterBy: string;
  filterOn: FilterStates;
}

const FetchOrders: React.FC<Props> = ({ filterBy, filterOn, sortBy }) => {
  const { loading, error, data, fetchMore } = useQuery<OrdersData, OrdersVars>(GET_ORDERS, {
    variables: {
      offset: 0,
      limit: 100
    },
    notifyOnNetworkStatusChange: true
  });

  // Keep a ref to current list to be able to update it in the future
  // https://stackoverflow.com/questions/55265255/react-usestate-hook-event-handler-using-initial-status
  const dataRef = React.useRef(data);
  const loadingRef = React.useRef(loading);

  React.useEffect(() => {
    const debouncedScroll = debounce(handleScroll);
    window.addEventListener("scroll", debouncedScroll);
    return () => window.removeEventListener("scroll", debouncedScroll);
  }, []);

  function handleScroll(e: Event) {
    const target: Document = e.target as Document;
    if (
      window.innerHeight + target.documentElement.scrollTop + 5 >=
      target.documentElement.scrollHeight
    ) {
      if (!loadingRef?.current) {
        fetchMore({
          variables: {
            offset: dataRef?.current?.orders.length || 0
          }
        });
      }
    }
  }

  if (loading && !data) return <Loading text="Fetching orders..." />;
  if (error) return <Error error={error} />;

  if (data?.orders?.length) {
    dataRef.current = data;
    loadingRef.current = loading;

    return (
      <RenderOrders
        loading={loading}
        filterBy={filterBy}
        filterOn={filterOn}
        sortBy={sortBy}
        orders={data.orders}
      />
    );
  }

  return <div>Sorry, no orders yet</div>;
};

export default React.memo(FetchOrders);
