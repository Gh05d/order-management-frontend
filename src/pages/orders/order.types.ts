export interface EmployeeShort {
  _id: string;
  firstName: string;
  lastName: string;
}

export interface CustomerShort {
  _id: string;
  firstName: string;
  lastName: string;
}

export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}

export interface ProductOrder {
  product: Product;
  quantity: number;
}

export interface Address {
  street?: string;
  zip: string;
  city: string;
  country: string;
  misc?: string;
}

export interface Order {
  _id: string;
  state: "OPEN" | "IN_PROGRESS" | "COMPLETE";
  totalPrice: number;
  address: Address;
  updated?: string;
  created: string;
  items: ProductOrder[];
  employee: EmployeeShort;
  customer: CustomerShort;
}

export interface OrdersData {
  orders: Order[];
}

export interface OrdersVars {
  limit?: number;
}
