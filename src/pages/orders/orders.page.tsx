import * as React from "react";
import { debounce } from "../../common/functions";

import FetchOrders from "./components/fetch-orders/fetch-orders.component";

import "./orders.page.scss";
import { FilterStates, SortStates } from "./orders.types";

const Orders: React.FC<{}> = () => {
  const [value, setValue] = React.useState<string>("");
  const [filterTerm, setFilterTerm] = React.useState<string>("");
  const [filterOn, setfilterOn] = React.useState<FilterStates>("customer");
  const [sortBy, setSortBy] = React.useState<SortStates>("created");

  const debouncedFilterTerm = debounce(term => setFilterTerm(term));

  function handleSortChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    setSortBy(e.target.value as SortStates);
  }

  function handlefilterOnChange(e: React.ChangeEvent<HTMLSelectElement>): void {
    setfilterOn(e.target.value as FilterStates);
  }

  function handleFilterInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setValue(e.target.value);
    debouncedFilterTerm(e.target.value);
  }

  return (
    <section id="orders">
      <h1>Orders</h1>

      <div className="list-tools">
        <div className="filter">
          <input
            value={value}
            onChange={handleFilterInputChange}
            aria-label="Enter filter term"
            id="search"
            type="search"
            placeholder="Filter by"
          />

          <select
            onChange={handlefilterOnChange}
            value={filterOn}
            aria-label="Select the filter value">
            <option value="customer">Customer</option>
            <option value="employee">Employee</option>
          </select>
        </div>

        <label>
          Sort orders by{" "}
          <select value={sortBy} onChange={handleSortChange} aria-label="Sort orders" id="sort">
            <option value="created">Creation date</option>
            <option value="customer">Customer name</option>
            <option value="employee">Employee name</option>
            <option value="status">Status</option>
          </select>
        </label>
      </div>

      <FetchOrders filterBy={filterTerm} filterOn={filterOn} sortBy={sortBy} />
    </section>
  );
};

export default Orders;
