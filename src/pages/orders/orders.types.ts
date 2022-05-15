export interface OrdersData {
  orders: Order[];
}

export interface OrdersVars {
  offset?: number;
  limit?: number;
}

export type SortStates = "created" | "customer" | "employee" | "status";
export type FilterStates = "customer" | "employee";
